import {FC} from 'react';
import css from './index.module.css';
import {ProofMenuItem} from '@components';
import TheaterImg from '@assets/icons/theater.svg';
import SoccerImg from '@assets/icons/soccer.svg';

const EventsContent: FC = function () {
  return (
    <div className={css.container}>
      <div className={css.proofsContainer}>
        <ProofMenuItem icon={TheaterImg} />
        <ProofMenuItem icon={SoccerImg} />
      </div>
    </div>
  );
};

export default EventsContent;
