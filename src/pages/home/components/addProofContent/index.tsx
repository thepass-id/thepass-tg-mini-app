import {FC} from 'react';
import css from './index.module.css';
import {Scanner} from '@yudiel/react-qr-scanner';
import {usePassword, useScan} from './index.hooks';
import {AddProofMode} from './index.api';
import VerificationInput from 'react-verification-input';

import scannerIcon from '@assets/icons/scanner.svg';
import Successimg from '@assets/images/success.png';

const AddProofContent: FC = function () {
  const {mode, onScan} = useScan();

  const {onComplete} = usePassword();

  return (
    <div className={css.container}>
      {mode === AddProofMode.ScanQR && (
        <div>
          <img className={css.scannerFrame} src={scannerIcon} />
          <Scanner components={{finder: false, audio: false}} onScan={onScan} />
        </div>
      )}

      {mode === AddProofMode.EnterPassword && (
        <VerificationInput
          autoFocus
          length={6}
          onComplete={onComplete}
          passwordMode
        />
      )}

      {mode === AddProofMode.CheckingPassword && (
        <div className={css.container}>
          <p>loading...</p>
        </div>
      )}

      {mode === AddProofMode.Congrats && (
        <div className={css.container}>
          <img style={{width: '50%'}} src={Successimg} />

          <h2 style={{marginTop: '40px'}}>Success</h2>
        </div>
      )}
    </div>
  );
};

export default AddProofContent;
