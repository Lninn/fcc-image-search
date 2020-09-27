import React from 'react';
import Panel from '@components/panel';
import { Link } from 'react-router-dom';

const TOPIC_LIST = 'TOPIC_LIST';

function Index() {
  const [topics] = React.useState(function() {
    try {
      const topics = JSON.parse(
        localStorage.getItem(TOPIC_LIST)
      );

      return topics.slice(0, 6);
    } catch (error) {
      return [];
    }
  });

  return (
    <Panel header="无人回复的话题" className='no-reply-topics-panel'>
      <ul>
        {topics.map(topic => {
          return (
            <li key={topic.id}>
              <Link to="/topic" >
                {topic.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </Panel>
  );
}

export default Index;
