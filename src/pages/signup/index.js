import React from 'react';
import Panel from '../../components/panel';
import PagePanelTitle from '../../components/page-panel-title';

function Index() {
  return (
    <div className="signup-page">
      <Panel header={<PagePanelTitle pageTitle='注册' />}>
        <p>
          注册
        </p>
      </Panel>
    </div>
  );
}

export default Index;
