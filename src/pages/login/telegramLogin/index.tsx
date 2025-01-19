import icon from '@assets/images/logo.png';
import css from './index.module.css';
import {FC} from 'react';
import {Button} from '@components';
import {useButtonHandlers, useLogin} from './index.hooks';
import {useSelector} from 'react-redux';
import {RootState} from '@stores';

const TelegramLogin: FC = function () {
  const {isSubmitting} = useSelector((state: RootState) => state.loginPage);

  const {isCheckingConnectionToArgentWallet} = useLogin();

  const {handleConnectButton} = useButtonHandlers();

  if (isCheckingConnectionToArgentWallet) {
    return <div className={css.loaderContainer}>loading ...</div>;
  }

  return (
    <>
      <div className={css.container}>
        <img src={icon} className={css.icon} />

        <p className={css.title}>
          your <b>zero-knowledge</b> pass to the world
        </p>
      </div>

      <Button
        disabled={isSubmitting}
        onClick={handleConnectButton}
        className={css.submitButton}
      >
        continue
      </Button>
    </>
  );
};

export default TelegramLogin;
