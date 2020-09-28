import React from "react";
import { Link } from "react-router-dom";
import Button from '@src/components/button';
import FormItem from '@src/components/form-item';

function Index({ onSubmit }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function _onSubmit(e) {
    e.preventDefault();
    
    onSubmit({ username, password });
  }

  return (
    <form onSubmit={_onSubmit} className="login-from">
      <FormItem name="username" label="用户名">
        <input
          type="text"
          maxLength="30"
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormItem>

      <FormItem name="password" label="密码">
        <input
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormItem>

      <div className="form-item group-btn">
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