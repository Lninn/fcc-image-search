import React from "react";
import { Panel } from "@components";

function Index() {
  const url = "https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU";

  return (
    <Panel header="客户端二维码" contentStyle={{ textAlign: "center" }}>
      <img width="200" src={url} alt="client qr code" />
      <br />
      <a href="/code">客户端源码地址</a>
    </Panel>
  );
}

export default Index;
