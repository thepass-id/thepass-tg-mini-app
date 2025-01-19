import {IDetectedBarcode} from '@yudiel/react-qr-scanner';
import {AddProofMode} from './index.api';
import {useEffect} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {setMode, setSubmitUrl} from '@stores/slices/addProof';
import {RootState} from '@stores';

export const useScan = () => {
  const dispatch = useDispatch();

  const {mode} = useSelector((state: RootState) => state.addProof);

  const onScan = (result: IDetectedBarcode[]) => {
    const submitProofUrl = result[0]?.rawValue;
    if (!submitProofUrl) throw new Error('No submit proof url');
    dispatch(setMode(AddProofMode.EnterPassword));
    dispatch(setSubmitUrl(submitProofUrl));
  };

  useEffect(() => {
    return () => {
      setMode(AddProofMode.ScanQR);
    };
  }, [setMode]);

  return {mode, onScan};
};

export const usePassword = () => {
  const {submitUrl} = useSelector((state: RootState) => state.addProof);

  const onComplete = async (value: string) => {
    try {
      setMode(AddProofMode.CheckingPassword);

      const proverUrl = import.meta.env.VITE_PROVER_URL;

      const proof = await axios.get<string>(
        proverUrl + `/stark-proof/${value}`,
      );

      await axios.post(submitUrl, {proof});

      setMode(AddProofMode.Congrats);
    } catch (error) {
      alert('Some error occurred, please try again later');
      setMode(AddProofMode.ScanQR);
      console.warn(error);
    }
  };

  return {onComplete};
};
