import React from 'react';
import './index.less';
import Pannel from '../Pannel';

function Index({ children }) {
  return (
    <aside className="side-bar">
      <Pannel title="无人回复的话题">
        <div>12312312</div>
        <div>12312312</div>
        <div>12312312</div>
        <div>12312312</div>
      </Pannel>

      <Pannel title="无人回复的话题">
        <div>12312312</div>
        <div>12312312</div>
        <div>12312312</div>
        <div>12312312</div>
      </Pannel>

      <Pannel title="无人回复的话题">
        <div>12312312</div>
        <div>12312312</div>
        <div>12312312</div>
        <div>12312312</div>
      </Pannel>
    </aside>
  );
}

export default Index;
