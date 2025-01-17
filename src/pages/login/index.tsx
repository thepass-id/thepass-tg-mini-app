import icon from '@assets/images/logo.png';
import css from './index.module.css';
import {FC} from 'react';
import {Button, Page} from '@components';
import {useButtonHandlers, useLogin} from './index.hooks';
import {useLoginPageState} from '@stores';

const Login: FC = function () {
  const {isSubmitting} = useLoginPageState();

  const {isCheckingConnectionToArgentWallet} = useLogin();

  const {handleConnectButton} = useButtonHandlers();

  if (isCheckingConnectionToArgentWallet) {
    return <Page className={css.loaderContainer}>loading ...</Page>;
  }

  return (
    <Page>
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
    </Page>
  );
};

export default Login;
