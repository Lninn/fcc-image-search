import React from 'react';
import Panel from '@components/panel';
import { Link } from 'react-router-dom';
import { queryRankingScore } from '@services';

function Index() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function query() {
      try {
        const res = await queryRankingScore();
        setData(res);
      } catch (error) {
        console.error(error);
      }
    }

    query();
  }, []);

  const header = (
    <>
      积分榜
      <Link to='/user'>TOP 100 &gt;&gt;&gt;</Link>
    </>
  );

  return (
    <Panel className='ranking-panel' header={header}>
      <ol>
        {data.map(user => {
          return (
            <li key={user.id}>
              <span>{user.score}</span>
              <Link to='/user'>{user.name}</Link>
            </li>
          );
        })}
      </ol>
    </Panel>
  );
}

export default Index;
