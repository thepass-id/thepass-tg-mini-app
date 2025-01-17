import {ProofTypes} from '../enums/proofTypes';

export const HOME_PATH = '/';
export const DASHBOARD_PATH = '/dashboard';

export const routerPath = {
  proofTypePage: (proofType: ProofTypes) => `${DASHBOARD_PATH}/${proofType}`,
};
