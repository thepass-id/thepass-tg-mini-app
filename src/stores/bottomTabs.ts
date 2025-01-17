import {equal} from '@utils';
import {BottomTabs} from '../enums/bottomTabs';
import {createWithEqualityFn} from 'zustand/traditional';

type State = {
  activeTab: BottomTabs;
};

type Action = {
  setActiveTab: (tab: BottomTabs) => void;
};

export const useBottomTabsState = createWithEqualityFn<State & Action>(
  function (set) {
    return {
      activeTab: BottomTabs.Home,
      setActiveTab(activeTab) {
        set(function () {
          return {activeTab};
        }, false);
      },
    };
  },
  equal,
);
