import React from 'react';
import './index.less';
import TitlePannel from '../TitlePannel';
import AdPannel from '../ad-pannel';
import NoRepliesTopicPannel from '../no-replies-topic-pannel';

function Index({ children }) {
  return (
    <aside className="side-bar">
      <TitlePannel />
      <AdPannel />
      <NoRepliesTopicPannel />
    </aside>
  );
}

export default Index;
