import React from 'react';
import Panel from '../../components/panel';
import PagePanelTitle from '../../components/page-panel-title';

function Index() {
  return (
    <div className="signin-page">
      <Panel header={<PagePanelTitle pageTitle='登陆' />}>
        <p>
          登陆
        </p>
      </Panel>
    </div>
  );
}

export default Index;
