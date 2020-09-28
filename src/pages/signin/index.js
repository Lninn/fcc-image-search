import React from "react";
import Panel from "@components/panel";
import PagePanelTitle from "@components/page-panel-title";
import "./index.less";
import LoginForm from "./login-form";

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
