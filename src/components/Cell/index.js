import React from 'react';
import './index.less';

function Index() {
  const data =  {
    userId: 'czy88840616',
    userAvatarUrl: 'https://avatars1.githubusercontent.com/u/18735806?v=4&s=120',
    countOfReplies: 10,
    countOfVisits: 352,
    tab: '置顶',
    title: '前端的按钮，在提端的按钮，在提端的按钮，在提端的按钮，在提端的按钮，在提端的按钮，在提端的按钮，在提问qweqeqweqweqwq',
    lastUser: {
      userId: 'czy88840616',
      avatarUrl: 'https://avatars0.githubusercontent.com/u/19824463?v=4&s=120',
      activeTime: '6 天前',
    },
  };

  return (
    <div className="topic-cell">

      <div className="topic-info pull-left">
        <a className="user-avatar" href="/user">
          <img src={data.userAvatarUrl} alt="user-avatar" />
        </a>

        <span className="topic-count">
          <span title="回复数">{data.countOfReplies}</span>
          <span>/</span>
          <span title="点击数">{data.countOfVisits}</span>
        </span>
      </div>

      <a className="last-time pull-right" href="/user">
        <span className="user-avatar small-avatar">
          <img src={data.lastUser.avatarUrl} alt="user-avatar" />
        </span>

        <span className="last-active-time">
          {data.lastUser.activeTime}
        </span>
      </a>

      <div className="wrapper-title">
        <span className="topic-tab topic-tab-2">
          {data.tab}
        </span>
        <a href="topic" className="topic-title">
          {data.title}
        </a>
      </div>
    </div>
  );
}

export default Index;
