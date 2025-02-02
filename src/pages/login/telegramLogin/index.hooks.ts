import {SessionAccountInterface} from '@argent/tma-wallet';
import {DASHBOARD_PATH} from '@routes';
import {useCallback, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {getArgentTMA} from './index.api';
import {useDispatch} from 'react-redux';
import {toggleSubmit} from '@stores/slices/loginPage';

const argentTMA = getArgentTMA();

export const useLogin = () => {
  const navigate = useNavigate();

  const [account, setAccount] = useState<SessionAccountInterface>();
  const [isConnected, setIsConnected] = useState<boolean>(false);

  const [
    isCheckingConnectionToArgentWallet,
    setIsCheckingConnectionToArgentWallet,
  ] = useState(true);

  const handleArgentConnect = useCallback(async () => {
    if (!argentTMA) throw new Error('Argent TMA not initialized');

    await argentTMA
      .connect()
      .then(res => {
        if (!res) {
          // Not connected
          setIsConnected(false);
          return;
        }

        // Connected
        const {account, callbackData} = res;

        if (account.getSessionStatus() !== 'VALID') {
          // Session has expired or scope (allowed methods) has changed
          // A new connection request should be triggered

          // The account object is still available to get access to user's address
          // but transactions can't be executed
          const {account} = res;

          setAccount(account);
          setIsConnected(false);
          return;
        }

        // Connected
        // The session account is returned and can be used to submit transactions
        setAccount(account);
        setIsConnected(true);
        // Custom data passed to the requestConnection() method is available here
        console.log('callback data:', callbackData);
      })
      .catch(err => {
        console.error('Failed to connect', err);
      });
  }, []);

  // Check if the user is already connected
  useEffect(() => {
    (async () => {
      try {
        await handleArgentConnect();
      } catch (err) {
        console.error('Failed to connect', err);
      } finally {
        console.log('finally');
        setIsCheckingConnectionToArgentWallet(false);
      }
    })();
  }, [handleArgentConnect]);

  // Redirect to the dashboard if the user is already connected
  useEffect(() => {
    if (isConnected) {
      navigate(DASHBOARD_PATH);
    }
  }, [isConnected, navigate]);

  return {
    isCheckingConnectionToArgentWallet,
  };
};

export const useButtonHandlers = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleConnectButton = async () => {
    if (!argentTMA) throw new Error('Argent TMA not initialized');

    dispatch(toggleSubmit(true));

    try {
      await argentTMA.requestConnection({
        callbackData: 'custom_callback',
      });

      navigate(DASHBOARD_PATH);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(toggleSubmit(false));
    }
  };

  return {handleConnectButton};
};
