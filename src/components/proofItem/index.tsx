import css from './index.module.css';
import {FC} from 'react';

const ProofItem: FC<{icon: string}> = function ({icon}) {
  return (
    <div className={css.container}>
      <img src={icon} className={css.icon} />
    </div>
  );
};

export default ProofItem;
