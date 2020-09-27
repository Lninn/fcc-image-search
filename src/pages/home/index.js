import React from "react";
import "./index.less";
import Panel from "@components/panel";
import Cell from "@components/topic-cell";
import classNames from "classnames";
import { queryTopics } from "@services";
import { AppContext } from "@src";

const TOPIC_LIST = "TOPIC_LIST";

function Index() {
  const { tab, changeTab } = React.useContext(AppContext);

  const [topics, setTopics] = React.useState(function () {
    try {
      const data = JSON.parse(localStorage.getItem(TOPIC_LIST));
      if (data && data.length) {
        return data;
      }

      return [];
    } catch (error) {
      return [];
    }
  });

  React.useEffect(() => {
    async function query() {
      if (topics.length) {
        return;
      }

      try {
        const res = await queryTopics();

        const { success, data } = res;
        if (success) {
          setTopics(data);

          localStorage.setItem(TOPIC_LIST, JSON.stringify(data));
        }
      } catch (error) {
        console.error(error);
      }
    }

    query();
  }, [topics.length]);

  const tabs = [
    { name: "全部" },
    { name: "精华" },
    { name: "分享" },
    { name: "问答" },
    { name: "招聘" },
    { name: "客户端测试" },
  ];

  function h(tabName) {
    changeTab(tabName);
  }

  const header = tabs.map(({ name }) => {
    const cls = classNames("tab", { active: name === tab });
    return (
      <span onClick={() => h(name)} className={cls} key={name}>
        {name}
      </span>
    );
  });

  return (
    <div className="home-page">
      <Panel header={header} contentStyle={{ padding: 0 }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {topics.map((topic, idx) => (
            <Cell topic={topic} key={idx} />
          ))}
        </div>
      </Panel>
    </div>
  );
}

export default Index;
