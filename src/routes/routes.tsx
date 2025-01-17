import {Home, Login, ProofType} from '@pages';
import {DASHBOARD_PATH, HOME_PATH} from './name';
import {RouteObject, createBrowserRouter} from 'react-router-dom';

const routes: RouteObject[] = [
  {path: HOME_PATH, element: <Login />},
  {path: DASHBOARD_PATH, element: <Home />},
  {path: `${DASHBOARD_PATH}/:proofType`, element: <ProofType />},
];

export default createBrowserRouter(routes);
