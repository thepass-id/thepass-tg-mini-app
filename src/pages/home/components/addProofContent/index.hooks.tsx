import {useAddProofState} from '@stores';
import {IDetectedBarcode} from '@yudiel/react-qr-scanner';
import {AddProofMode} from './index.api';
import {useEffect} from 'react';
import axios from 'axios';

export const useScan = () => {
  const {setMode, setSubmitUrl} = useAddProofState();

  const onScan = (result: IDetectedBarcode[]) => {
    const submitProofUrl = result[0]?.rawValue;
    console.log('🚀 ~ onScan ~ submitProofUrl:', submitProofUrl);
    if (!submitProofUrl) throw new Error('No submit proof url');
    setMode(AddProofMode.EnterPassword);
    setSubmitUrl(submitProofUrl);
  };

  useEffect(() => {
    return () => setMode(AddProofMode.ScanQR);
  }, [setMode]);

  return {onScan};
};

export const usePassword = () => {
  const {submitUrl, setMode} = useAddProofState();
  console.log('🚀 ~ usePassword ~ submitUrl:', submitUrl);

  const onComplete = async () => {
    try {
      setMode(AddProofMode.CheckingPassword);

      await new Promise(resolve => setTimeout(resolve, 3000));
      setMode(AddProofMode.Congrats);

      console.log('🚀 ~ onComplete ~ submitUrl:', submitUrl);
      await new Promise(resolve => setTimeout(resolve, 3500));
      await axios.post(submitUrl);
    } catch (error) {
      console.log(error);
    }
  };

  return {onComplete};
};
