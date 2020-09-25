import React from 'react';
import './index.less';
import TitlePanel from '../title-panel';
import AdPanel from '../ad-panel';
import NoRepliesTopicPanel from '../no-replies-topic-panel';
import QRcodePanel from '../qrcode-panel';

function Index({ children }) {
  return (
    <aside className="side-bar">
      <TitlePanel />
      <AdPanel />
      <NoRepliesTopicPanel />
      <QRcodePanel />
    </aside>
  );
}

export default Index;
