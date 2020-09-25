import React from 'react';
import Panel from '../../components/panel';

function Index({ children }) {
  const header = (
    <div>
      <a href="/">主页</a>
      <span>/</span>
      <span>登陆</span>
    </div>
  );

  return (
    <div className="signin-page">
      <Panel header={header}>
        <p>
          登陆
        </p>
      </Panel>
    </div>
  );
}

export default Index;
