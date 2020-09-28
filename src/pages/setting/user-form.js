import React from "react";
import { FormItem } from "@src/components";
import { Button } from "@src/components";

function Index({ onSubmit }) {
  const [username, setUsername] = React.useState("");

  function _onSubmit(e) {
    e.preventDefault();

    if (onSubmit) {
      onSubmit({ username });
    }
  }

  return (
    <form style={{ marginTop: 20 }} onSubmit={_onSubmit} className="user-from">
      <FormItem name="username" label="用户名">
        <input
          type="text"
          maxLength="30"
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormItem>

      <FormItem name="email" label="电子邮件">
        <input type="email" />
      </FormItem>

      <FormItem name="site" label="个人网站">
        <input type="text" />
      </FormItem>

      <FormItem name="address" label="所在地点">
        <input type="text" />
      </FormItem>

      <FormItem name="weibo" label="微博">
        <input type="text" />
      </FormItem>

      <FormItem name="github" label="Github">
        <input type="text" />
      </FormItem>

      <FormItem name="content" label="个性签名">
        <textarea />
      </FormItem>

      <FormItem>
        <Button>保存设置</Button>
      </FormItem>
    </form>
  );
}

export default Index;
