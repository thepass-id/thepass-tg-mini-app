// TODO move enums to a path
import {BottomTabs} from '../../../../enums/bottomTabs';
import {FC, ReactElement} from 'react';
import HomeContent from '../homeContent';
import {useBottomTabsState} from '@stores';
import GovernmentDocsContent from '../governmentDocsContent';
import AddProofContent from '../addProofContent';
import EventsContent from '../eventsContent';
import MilestoneContent from '../milestoneContent';

const tabs: Record<BottomTabs, ReactElement> = {
  [BottomTabs.Home]: <HomeContent />,
  [BottomTabs.GovernmentDocs]: <GovernmentDocsContent />,
  [BottomTabs.AddProof]: <AddProofContent />,
  [BottomTabs.Events]: <EventsContent />,
  [BottomTabs.Milestones]: <MilestoneContent />,
};

const Content: FC = function () {
  const {activeTab} = useBottomTabsState();

  return tabs[activeTab];
};

export default Content;
