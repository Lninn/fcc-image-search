import React from 'react';
import './index.less';
import Pannel from '../Pannel';
import TitlePannel from '../TitlePannel';
import AdPannel from '../AdPannel';
import NoRepliesTopicPannel from '../NoRepliesTopicPannel';

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
