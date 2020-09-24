import React from 'react';
import './index.less';
import Pannel from '../../components/Pannel';

function Index() {
  return (
    <div className="home-page">
      <div style={{ width: 360 }}>
        <Pannel title="无人回复的话题">
          <div>12312</div>
          <div>12312</div>
          <div>12312</div>
          <div>12312</div>
        </Pannel>
        <Pannel title="积分榜">
          <div>12312</div>
          <div>12312</div>
          <div>12312</div>
          <div>12312</div>
        </Pannel>
        <Pannel>
          <h4 style={{ marginBottom: 12 }}>Cnode 专业社区</h4>
          <div>12312</div>
          <div>12312</div>
          <div>12312</div>
          <div>12312</div>
        </Pannel>
      </div>
    </div>
  );
}

export default Index;
