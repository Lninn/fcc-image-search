import React from 'react';
import './index.less';
import TitlePanel from '@components/title-panel';
import AdPanel from '@components/ad-panel';
import NoRepliesTopicPanel from '@components/no-replies-topic-panel';
import QRcodePanel from '@components/qrcode-panel';
import FriendlyCommunityPanel from '@components/friendly-community-panel';
import RankingPanel from '@components/ranking-panel';
import AboutPanel from '@components/about-panel';

function Index() {
  return (
    <aside className="side-bar">
      <TitlePanel />
      {/* <AdPanel />
      <NoRepliesTopicPanel />
      <FriendlyCommunityPanel />
      <RankingPanel />
      <QRcodePanel />
      <AboutPanel /> */}
    </aside>
  );
}

export default Index;
