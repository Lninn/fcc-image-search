import React from "react";
import { FormItem, Button } from "@src/components";

function Index({ user, onSubmit }) {
  function _onSubmit(e) {
    e.preventDefault();

    if (onSubmit) {
      onSubmit();
    }
  }

  return (
    <form onSubmit={_onSubmit} className="user-from">
      <FormItem name="username" label="用户名">
        <input
          type="text"
          maxLength="30"
          autoComplete="username"
          value={user.username}
        />
      </FormItem>

      <FormItem name="email" label="电子邮件">
        <input type="email" value={user.email} />
      </FormItem>

      <FormItem name="site" label="个人网站">
        <input type="text" value={user.site} />
      </FormItem>

      <FormItem name="address" label="所在地点">
        <input type="text" value={user.address} />
      </FormItem>

      <FormItem name="weibo" label="微博">
        <input type="text" value={user.weibo} />
      </FormItem>

      <FormItem name="github" label="Github">
        <input type="text" value={user.github} />
      </FormItem>

      <FormItem name="content" label="个性签名">
        <textarea value={user.signature} />
      </FormItem>

      <FormItem>
        <Button>保存设置</Button>
      </FormItem>
    </form>
  );
}

export default Index;
