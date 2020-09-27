import React from 'react';
import { useLocation } from 'react-router-dom';
import './index.less';
import TitlePanel from '@components/title-panel';
import AdPanel from '@components/ad-panel';
import NoRepliesTopicPanel from '@components/no-replies-topic-panel';
import QRcodePanel from '@components/qrcode-panel';
import FriendlyCommunityPanel from '@components/friendly-community-panel';
import RankingPanel from '@components/ranking-panel';
import AboutPanel from '@components/about-panel';

function Index() {
  const { pathname } = useLocation();

  switch (pathname) {
    case '/home':
      return (
        <>
          <TitlePanel />
          <AdPanel />
          <NoRepliesTopicPanel />
          <RankingPanel />
          <FriendlyCommunityPanel />
          <QRcodePanel />
        </>
      );
    case '/getting-started':
    case '/about':
      return (
        <>
          <TitlePanel />
          <AdPanel />
          <FriendlyCommunityPanel />
          <QRcodePanel />
        </>
      );
    case '/api':
      return null;
    case '/signin':
    case '/signup':
      return <AboutPanel />;
    default:
      return null;
  }
}

export default Index;
