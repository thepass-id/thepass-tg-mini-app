import icon from '@assets/images/logo.png';
import css from './index.module.css';
import {FC} from 'react';
import {Button, Page} from '@components';
import {useButtonHandlers, useLogin} from './index.hooks';
import {useLoginPageState} from '@stores';

const TelegramLogin: FC = function () {
  const {isSubmitting} = useLoginPageState();

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
