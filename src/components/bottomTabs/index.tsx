import HouseImg from '@assets/icons/house.svg';
import BankImg from '@assets/icons/bank.svg';
import PlusImg from '@assets/icons/plus.svg';
import TicketImg from '@assets/icons/ticket.svg';
import FlagImg from '@assets/icons/flag.svg';
import css from './index.module.css';
import {FC} from 'react';
import cla from 'classnames';
import {useBottomTabsState} from '@stores';
import {BottomTabs as BottomTabsNames} from '../../enums/bottomTabs';
import {useNavigate} from 'react-router-dom';
import {DASHBOARD_PATH} from '@routes';

const BottomTabs: FC = function () {
  const {activeTab, setActiveTab} = useBottomTabsState();

  const navigate = useNavigate();

  return (
    <>
      <div className={css.divider} />

      <div className={css.container}>
        <img
          onClick={() => {
            navigate(DASHBOARD_PATH);
            setActiveTab(BottomTabsNames.Home);
          }}
          src={HouseImg}
          className={cla(css.icon, {
            [css.active]: activeTab === BottomTabsNames.Home,
          })}
        />
        <img
          onClick={() => {
            navigate(DASHBOARD_PATH);
            setActiveTab(BottomTabsNames.GovernmentDocs);
          }}
          src={BankImg}
          className={cla(css.icon, {
            [css.active]: activeTab === BottomTabsNames.GovernmentDocs,
          })}
        />
        <img
          onClick={() => {
            navigate(DASHBOARD_PATH);
            setActiveTab(BottomTabsNames.AddProof);
          }}
          src={PlusImg}
          className={cla(css.icon, css.plus, {
            [css.active]: activeTab === BottomTabsNames.AddProof,
          })}
        />
        <img
          onClick={() => {
            navigate(DASHBOARD_PATH);
            setActiveTab(BottomTabsNames.Events);
          }}
          src={TicketImg}
          className={cla(css.icon, {
            [css.active]: activeTab === BottomTabsNames.Events,
          })}
        />
        <img
          onClick={() => {
            navigate(DASHBOARD_PATH);
            setActiveTab(BottomTabsNames.Milestones);
          }}
          src={FlagImg}
          className={cla(css.icon, {
            [css.active]: activeTab === BottomTabsNames.Milestones,
          })}
        />
      </div>
    </>
  );
};

export default BottomTabs;
