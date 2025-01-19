import {FC, ReactElement} from 'react';
import HomeContent from '../homeContent';
import GovernmentDocsContent from '../governmentDocsContent';
import AddProofContent from '../addProofContent';
import EventsContent from '../eventsContent';
import MilestoneContent from '../milestoneContent';
import {BottomTabs} from '../../../../enums/bottomTabs';
import {useSelector} from 'react-redux';
import {RootState} from '@stores';

const tabs: Record<BottomTabs, ReactElement> = {
  [BottomTabs.Home]: <HomeContent />,
  [BottomTabs.GovernmentDocs]: <GovernmentDocsContent />,
  [BottomTabs.AddProof]: <AddProofContent />,
  [BottomTabs.Events]: <EventsContent />,
  [BottomTabs.Milestones]: <MilestoneContent />,
};

const Content: FC = function () {
  const {activeTab} = useSelector((state: RootState) => state.bottomTabs);

  return tabs[activeTab];
};

export default Content;
