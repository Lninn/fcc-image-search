import React from 'react';
import Panel from '../panel';
import { Link } from 'react-router-dom';

function Index() {
  return (
    <Panel className="title-panel">
      <p style={{ fontSize: 14, marginBottom: 10, color: '#333' }}>
        CNode：Node.js专业中文社区
      </p>

      <div>
        <span>你可以 </span>
        <Link to="/signup">注册</Link>
        <span> 或 </span>
        <Link to="/signin">登陆</Link>
        <span>, 也可以</span>
      </div>
      <button>
        通过 GitHub 登陆
      </button>
    </Panel>
  );
}

export default Index;
