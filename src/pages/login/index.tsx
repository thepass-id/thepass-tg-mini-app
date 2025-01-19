import {FC, useEffect} from 'react';
import {isTMA} from '@telegram-apps/sdk-react';
import {Page} from '@components';
import TelegramLogin from './telegramLogin';
import {useNavigate} from 'react-router-dom';
import {DASHBOARD_PATH} from '@routes';

const Login: FC = function () {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isTMA('simple')) {
      navigate(DASHBOARD_PATH);
    }
  }, [navigate]);

  return <Page>{isTMA('simple') ? <TelegramLogin /> : <div />}</Page>;
};

export default Login;
