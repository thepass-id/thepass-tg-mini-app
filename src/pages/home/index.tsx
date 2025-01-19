import {FC} from 'react';
import {BottomTabs, Header, Page} from '@components';
import Content from './components/content';

const Home: FC = function () {
  return (
    <Page>
      <Header />
      <Content />
      <BottomTabs />
    </Page>
  );
};

export default Home;
