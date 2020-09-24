import React from 'react';
import './index.less';

function Index({ topic }) {
  // const data =  {
  //   userId: 'czy88840616',
  //   userAvatarUrl: 'https://avatars1.githubusercontent.com/u/18735806?v=4&s=120',
  //   countOfReplies: 10,
  //   countOfVisits: 352,
  //   tab: '置顶',
  //   title: '前端的按钮，在提端的按钮，在提端的按钮，在提端的按钮，在提端的按钮，在提端的按钮，在提端的按钮，在提问qweqeqweqweqwq',
  //   lastUser: {
  //     userId: 'czy88840616',
  //     avatarUrl: 'https://avatars0.githubusercontent.com/u/19824463?v=4&s=120',
  //     activeTime: '6 天前',
  //   },
  // };

  const {
    author,
    reply_count,
    visit_count,
    title,
  } = topic;

  const tabMapping = {
    share: '分享',
    ask: '问题',
  };

  function getTabName(topic) {
    if (topic.top) {
      return '置顶';
    }

    if (topic.good) {
      return '精华';
    }

    if (topic.tab) {
      return tabMapping[topic.tab];
    }

    return '其他';
  }

  return (
    <div className="topic-cell">

      <div className="topic-info pull-left">
        <a className="user-avatar" href="/user">
          <img src={author.avatar_url} alt="user-avatar" />
        </a>

        <span className="topic-count">
          <span title="回复数">{reply_count}</span>
          <span>/</span>
          <span title="点击数">{visit_count}</span>
        </span>
      </div>

      <a className="last-time pull-right" href="/user">
        <span className="user-avatar small-avatar">
          <img src={author.avatar_url} alt="user-avatar" />
        </span>

        <span className="last-active-time">
          3 天前
        </span>
      </a>

      <div className="wrapper-title">
        <span className="topic-tab topic-tab-2">
          {getTabName(topic)}
        </span>
        <a href="topic" className="topic-title">
          {title}
        </a>
      </div>

    </div>
  );
}

export default Index;
