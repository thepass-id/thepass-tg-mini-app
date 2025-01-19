import {FC} from 'react';
import css from './index.module.css';
import {ProofMenuItem} from '@components';

import IdImg from '@assets/icons/id.svg';
import PassportImg from '@assets/icons/passport.svg';

const GovernmentDocsContent: FC = function () {
  return (
    <div className={css.container}>
      <div className={css.proofsContainer}>
        <ProofMenuItem icon={PassportImg} />
        <ProofMenuItem icon={IdImg} />
      </div>
    </div>
  );
};

export default GovernmentDocsContent;
