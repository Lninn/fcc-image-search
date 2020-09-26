import React from 'react';
import Panel from '../../components/panel';
import PagePanelTitle from '../../components/page-panel-title';

function Index() {
  return (
    <div className="public-api-page">
      <Panel header={<PagePanelTitle pageTitle='API' />}>
        <p>
          API
        </p>
      </Panel>
    </div>
  );
}

export default Index;
