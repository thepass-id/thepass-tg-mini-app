import css from './index.module.css';
import {FC} from 'react';
import {useParams} from 'react-router-dom';
import {BottomTabs, Header, Page, ProofItem} from '@components';
import {ProofTypes} from '../../enums/proofTypes';
import HarvardLogo from '@assets/images/harvard_logo.png';
import MedalImg from '@assets/icons/medal.svg';
import CupImg from '@assets/icons/cup.svg';
import GraduationCupImg from '@assets/icons/graduation-cup.svg';

const imgMapper = {
  [ProofTypes.Affiliation]: MedalImg,
  [ProofTypes.Award]: CupImg,
  [ProofTypes.Degree]: GraduationCupImg,
};

const ProofType: FC = function () {
  const {proofType} = useParams<{proofType: ProofTypes}>();

  return (
    <Page>
      <Header />

      <div className={css.container}>
        <img src={imgMapper[proofType!]} className={css.icon} />

        <div className={css.proofItemsContainer}>
          {['harvard'].map(e => (
            <ProofItem key={e} icon={HarvardLogo} />
          ))}
        </div>
      </div>

      <BottomTabs />
    </Page>
  );
};

export default ProofType;
