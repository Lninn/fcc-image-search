import React from "react";
import { Panel, PagePanelTitle } from "@components";
import LoginForm from "./login-form";
import "./index.less";

function Index() {
  const [error, setError] = React.useState(false);

  function handleSubmit({ username, password }) {
    if (!username || !password) {
      setError("请填写完整的信息！");
    }
  }

  const v = error ? "visible" : "hidden";

  return (
    <div className="signin-page">
      <Panel header={<PagePanelTitle pageTitle="登陆" />}>
        {
          <div
            className="error-message"
            style={{ visibility: v }}
            onClick={() => setError(false)}
          >
            {error}
          </div>
        }
        <LoginForm onSubmit={handleSubmit} />
      </Panel>
    </div>
  );
}

export default Index;
