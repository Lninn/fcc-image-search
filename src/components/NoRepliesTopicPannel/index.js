import React from 'react';
import Pannel from '../Pannel';
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
    <Pannel title="无人回复的话题">
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
    </Pannel>
  );
}

export default Index;
