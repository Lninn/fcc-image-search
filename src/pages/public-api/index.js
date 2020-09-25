import React from 'react';
import Panel from '../../components/panel';

function Index({ children }) {
  const header = (
    <div>
      <a href="/">主页</a>
      <span>/</span>
      <span>API</span>
    </div>
  );

  return (
    <div className="public-api-page">
      <Panel header={header}>
        <p>
          API
        </p>
      </Panel>
    </div>
  );
}

export default Index;
