import React from "react";
import { Panel, PagePanelTitle } from "@components";

function Index() {
  return (
    <div className="signup-page">
      <Panel header={<PagePanelTitle pageTitle="注册" />}>
        <p>注册</p>
      </Panel>
    </div>
  );
}

export default Index;
