import React from 'react';
import './index.less';
import Pannel from '../../components/Pannel';
import Cell from '../../components/Cell';
import classNames from 'classnames';

function Index() {
  const [tab, setTab] = React.useState('全部');
  const [topics, setTopics] = React.useState([]);

  React.useEffect(() => {
    async function query() {
      const url = 'https://cnodejs.org/api/v1/topics';
      try {
        const res = await fetch(url)
          .then(res => res.json());

        const { success, data } = res;
        if (success) {
          setTopics(data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    query();
  }, []);

  const tabs = [
    { name: '全部' },
    { name: '精华' },
    { name: '分享' },
    { name: '问答' },
    { name: '招聘' },
    { name: '客户端测试' },
  ];

  function h(tabName) { setTab(tabName); }

  const header = tabs.map(({ name }) => {
    const cls = classNames('tab', { active: name === tab });
    return (
      <span
        onClick={() => h(name)}
        className={cls}
        key={name}>
          {name}
      </span>
    )
  });

  return (
    <div className="home-page">
      <Pannel title={header} contentStyle={{ padding: 0 }}>
        <div
          style={{ display: 'flex', flexDirection: 'column' }}>
            {topics.map((topic, idx) => <Cell topic={topic} key={idx} />)}
        </div>
      </Pannel>
    </div>
  );
}

export default Index;
