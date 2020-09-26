import React from 'react';
import './index.less';
import TitlePanel from '../title-panel';
import AdPanel from '../ad-panel';
import NoRepliesTopicPanel from '../no-replies-topic-panel';
import QRcodePanel from '../qrcode-panel';
import FriendlyCommunityPanel from '../friendly-community-panel';
import RankingPanel from '../ranking-panel';
import AboutPanel from '../about-panel';

function Index({ children }) {
  return (
    <aside className="side-bar">
      <TitlePanel />
      <AdPanel />
      <NoRepliesTopicPanel />
      <FriendlyCommunityPanel />
      <RankingPanel />
      <QRcodePanel />
      <AboutPanel />
    </aside>
  );
}

export default Index;
