import React from "react";
import { FormItem } from "@src/components";
import { Button } from "@src/components";

function Index({ onSubmit }) {
  function _onSubmit(e) {
    e.preventDefault();
  }

  return (
    <form style={{ marginTop: 20 }} onSubmit={_onSubmit} className="user-from">
      <FormItem name="password" label="当前密码">
        <input type="password" autoComplete="current-password" />
      </FormItem>

      <FormItem name="new-password" label="新密码">
        <input type="password" autoComplete="current-password" />
      </FormItem>

      <FormItem>
        <Button>更 改 密 码</Button>
      </FormItem>
    </form>
  );
}

export default Index;
