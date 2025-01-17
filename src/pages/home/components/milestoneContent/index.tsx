import {FC} from 'react';
import css from './index.module.css';
import {ProofMenuItem} from '@components';
import MedalImg from '@assets/icons/medal.svg';
import CupImg from '@assets/icons/cup.svg';
import GraduationCupImg from '@assets/icons/graduation-cup.svg';
import {routerPath} from '@routes';
import {ProofTypes} from '../../../../enums/proofTypes';

const MilestoneContent: FC = function () {
  return (
    <div className={css.container}>
      <div className={css.proofsContainer}>
        <ProofMenuItem
          icon={MedalImg}
          link={routerPath.proofTypePage(ProofTypes.Affiliation)}
        />
        <ProofMenuItem
          icon={CupImg}
          link={routerPath.proofTypePage(ProofTypes.Award)}
        />
        <ProofMenuItem
          icon={GraduationCupImg}
          link={routerPath.proofTypePage(ProofTypes.Degree)}
        />
      </div>
    </div>
  );
};

export default MilestoneContent;
