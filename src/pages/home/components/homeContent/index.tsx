import {FC} from 'react';
import css from './index.module.css';
import {Button} from '@components';
import {getArgentTMA} from '@pages/login/telegramLogin/index.api';
import {useNavigate} from 'react-router-dom';
import {HOME_PATH} from '@routes';

const HomeContent: FC = function () {
  const navigate = useNavigate();

  const handleClearArgentSession = async () => {
    navigate(HOME_PATH);

    const argentTMA = getArgentTMA();
    if (argentTMA) {
      await argentTMA.clearSession();
    }
  };

  return (
    <div className={css.container}>
      <Button onClick={handleClearArgentSession} className={css.logOutBtn}>
        Log out
      </Button>
    </div>
  );
};

export default HomeContent;
