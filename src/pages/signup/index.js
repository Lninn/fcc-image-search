import React from 'react';
import Panel from '../../components/panel';

function Index({ children }) {
  const header = (
    <div>
      <a href="/">主页</a>
      <span>/</span>
      <span>注册</span>
    </div>
  );

  return (
    <div className="signup-page">
      <Panel header={header}>
        <p>
          注册
        </p>
      </Panel>
    </div>
  );
}

export default Index;
