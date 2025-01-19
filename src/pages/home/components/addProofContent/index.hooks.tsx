import {useAddProofState} from '@stores';
import {IDetectedBarcode} from '@yudiel/react-qr-scanner';
import {AddProofMode} from './index.api';
import {useEffect} from 'react';
import axios from 'axios';

export const useScan = () => {
  const {setMode, setSubmitUrl} = useAddProofState();

  const onScan = (result: IDetectedBarcode[]) => {
    const submitProofUrl = result[0]?.rawValue;
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

  const onComplete = async (value: string) => {
    try {
      setMode(AddProofMode.CheckingPassword);

      const proverUrl = import.meta.env.VITE_PROVER_URL;

      const proof = await axios.get<string>(
        proverUrl + `/stark-proof/${value}`,
      );

      await axios.post(submitUrl, {proof});

      setMode(AddProofMode.Congrats);
    } catch (error) {
      alert('Some error occurred, please try again later');
      setMode(AddProofMode.ScanQR);
      console.warn(error);
    }
  };

  return {onComplete};
};
