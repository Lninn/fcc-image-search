import React from "react";
import Panel from "@components/panel";

function Index() {
  const list = [
    {
      id: 1,
      url: "https://static2.cnodejs.org/public/images/ruby-china-20150529.png",
    },
    {
      id: 2,
      url: "https://static2.cnodejs.org/public/images/phphub-logo.png",
    },
  ];

  return (
    <Panel header="友情社区">
      {list.map((x) => {
        return (
          <div key={x.id}>
            <img width="150" src={x.url} alt="ad" />
          </div>
        );
      })}
    </Panel>
  );
}

export default Index;
