import {useNavigate} from 'react-router-dom';
import css from './index.module.css';
import {FC} from 'react';

// TODO make link mandatory
const ProofMenuItem: FC<{icon: string; link?: string}> = function ({
  icon,
  link,
}) {
  const navigate = useNavigate();

  const goToProofTypePage = () => link && navigate(link);

  return (
    <div className={css.container} onClick={goToProofTypePage}>
      <img src={icon} className={css.icon} />
    </div>
  );
};

export default ProofMenuItem;
