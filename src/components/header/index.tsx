import icon from '@assets/images/logo.png';
import css from './index.module.css';
import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {DASHBOARD_PATH} from '@routes';

const Home: FC = function () {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate(DASHBOARD_PATH);
  };

  return (
    <div className={css.container}>
      <img src={icon} className={css.icon} onClick={goToDashboard} />

      <div className={css.divider} />
    </div>
  );
};

export default Home;
