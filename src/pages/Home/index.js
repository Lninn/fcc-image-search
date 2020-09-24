import React from 'react';
import './index.less';
import Pannel from '../../components/Pannel';
import classNames from 'classnames';

function Index() {
  const [tab, setTab] = React.useState('全部');

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
    const cls = classNames('tab', { active: name == tab });
    return (
      <span
        onClick={() => h(name)}
        className={cls}
        key={name}>
          {name}
      </span>
    )
  })

  return (
    <div className="home-page">
      <Pannel title={header}>
        <div>12312</div>
        <div>12312</div>
        <div>12312</div>
        <div>12312</div>
      </Pannel>
    </div>
  );
}

export default Index;
