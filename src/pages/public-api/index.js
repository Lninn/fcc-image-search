import React from 'react';
import Panel from '@components/panel';
import PagePanelTitle from '@components/page-panel-title';

function Index() {
  return (
    <div className="public-api-page">
      <Panel header={<PagePanelTitle pageTitle='API' />}>
        <p>以下 api 路径均以 https://cnodejs.org/api/v1 为前缀</p>
        <p>
          update 2019-03-21: 涉及发帖和发评论的接口都已经下线了，太多人为了测试客户端乱发帖了。
        </p>
      </Panel>
    </div>
  );
}

export default Index;
