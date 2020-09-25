import React from 'react';
import Panel from '../../components/panel';

function Index({ children }) {
  const header = (
    <div>
      <a href="/">主页</a>
      <span>/</span>
      <span>Node.js 新手入门</span>
    </div>
  );

  return (
    <div className="getting-started-page">
      <Panel header={header}>
        <p>
          Node.js 新手入门
        </p>
      </Panel>
    </div>
  );
}

export default Index;
