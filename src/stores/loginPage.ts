import {equal} from '@utils';
import {createWithEqualityFn} from 'zustand/traditional';

type State = {
  isSubmitting: boolean;
};

type Action = {
  toggleSubmit: (isSubmitting: boolean) => void;
};

export const useLoginPageState = createWithEqualityFn<State & Action>(function (
  set,
) {
  return {
    isSubmitting: false,
    toggleSubmit(isSubmitting) {
      set(function () {
        return {isSubmitting};
      }, false);
    },
  };
}, equal);
