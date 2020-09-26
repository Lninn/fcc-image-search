import React from 'react';
import Panel from '../../components/panel';
import PagePanelTitle from '../../components/page-panel-title';

function Index() {
  return (
    <div className="getting-started-page">
      <Panel header={<PagePanelTitle pageTitle='Node.js 新手入门' />}>
        <p>
          Node.js 新手入门
        </p>
      </Panel>
    </div>
  );
}

export default Index;
