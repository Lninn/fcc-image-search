import React from "react";
import { Link } from "react-router-dom";
import Button from '@src/components/button';

function Index({ onSubmit }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function _onSubmit(e) {
    e.preventDefault();
    
    onSubmit({ username, password });
  }

  return (
    <form onSubmit={_onSubmit} className="login-from">
      <div className="control-group">
        <div className="control-label">
          <label htmlFor="username">用户名</label>
        </div>
        <div className="control-input">
          <input
            id="username"
            type="text"
            maxLength="30"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>

      <div className="control-group">
        <div className="control-label">
          <label htmlFor="password">密码</label>
        </div>
        <div className="control-input">
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="control-group group-btn">
        <Button className="login-btn">登 录</Button>
        <Button className="login-github-btn">通过 Github 登录</Button>
        <Link to="/forget-passwd" className="forget-passwd">
          忘记密码了吗？
        </Link>
      </div>
    </form>
  );
}

export default Index;