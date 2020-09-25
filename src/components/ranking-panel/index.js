import React from 'react';
import Panel from '../panel';
import { Link } from 'react-router-dom';
import { queryRankingScore } from '../../services';

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
      <Link to='/user'>TOP 100 >>></Link>
    </>
  );

  return (
    <Panel header={header}>
      <ol>
        {data.map(user => {
          return (
            <li key={user.id} style={{ display: 'block', color: 'gray', lineHeight: '2em' }}>
              <span style={{ width: 60, display: 'inline-block' }}>{user.score}</span>
              <Link to={user.id}>{user.name}</Link>
            </li>
          );
        })}
      </ol>
    </Panel>
  );
}

export default Index;
