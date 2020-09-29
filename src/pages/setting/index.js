import React from "react";
import { Panel, Button, PagePanelTitle } from "@components";
import UserForm from "./user-form";
import ChangePasswd from "./change-passwd";
import "./index.less";

function Index() {
  const [user] = React.useState({
    username: "Bixxxy",
    email: "example@mail.com",
    site: "personsite.com",
    address: "",
    weibo: "example@weibo.com",
    github: "example@github.com",
    signature: "",
  });

  return (
    <div className="setting-page">
      <Panel header={<PagePanelTitle pageTitle="设置" />}>
        <UserForm user={user} />
      </Panel>

      <Panel header="更改密码">
        <ChangePasswd />
      </Panel>

      <Panel header="Access Token">
        <Button>刷新 Token</Button>

        <p>字符串： 70a2cae0-73bc-4669-b93e-49a839925222</p>
      </Panel>
    </div>
  );
}

export default Index;
