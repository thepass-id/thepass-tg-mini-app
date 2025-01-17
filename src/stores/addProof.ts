import {AddProofMode} from '@pages/home/components/addProofContent/index.api';
import {equal} from '@utils';
import {createWithEqualityFn} from 'zustand/traditional';

type State = {
  mode: AddProofMode;
  submitUrl: string;
};

type Action = {
  setMode: (mode: AddProofMode) => void;
  setSubmitUrl: (submitUrl: string) => void;
};

export const useAddProofState = createWithEqualityFn<State & Action>(function (
  set,
) {
  return {
    mode: AddProofMode.ScanQR,
    submitUrl: '',
    setMode(mode) {
      set(function () {
        return {mode};
      }, false);
    },
    setSubmitUrl(submitUrl) {
      set(function () {
        return {submitUrl};
      }, false);
    },
  };
}, equal);
