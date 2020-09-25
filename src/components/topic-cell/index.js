import React from 'react';
import './index.less';
import classNames from 'classnames';

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
    top: '置顶',
    good: '精华',
    other: '其他',
  };

  function fixTab(topic) {
    if (topic.top) {
      return 'top';
    }

    if (topic.good) {
      return 'good';
    }

    if (topic.tab) {
      return topic.tab;
    }

    return 'other';
  }

  const tab = fixTab(topic);
  const tabNameCls = classNames(
    'topic-tab',
    { 'topic-tab-2': ['top', 'good'].includes(tab) },
  );

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
        <span className={tabNameCls}>
          {tabMapping[tab]}
        </span>
        <a href="topic" className="topic-title">
          {title}
        </a>
      </div>

    </div>
  );
}

export default Index;
