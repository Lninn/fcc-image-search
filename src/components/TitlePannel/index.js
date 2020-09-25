import React from 'react';
import Pannel from '../pannel';
import { Link } from 'react-router-dom';

function Index() {
  return (
    <Pannel>
      <p style={{ fontSize: 14, marginBottom: 10, color: '#333' }}>
        CNode：Node.js专业中文社区
      </p>

      <div>
        <span>你可以 </span>
        <Link to="/signup" style={{ color: '#778087' }}>注册</Link>
        <span> 或 </span>
        <Link to="/signin" style={{ color: '#778087' }}>登陆</Link>
        <span>, 也可以</span>
      </div>
      <button style={{
          padding: '3px 10px',
          background: '#5bc0de',
          letterSpacing: '2px',
          lineHeight: '2em',
          color: '#fff',
          borderRadius: 3,
          marginTop: 3
        }}
      >
        通过 GitHub 登陆
      </button>
    </Pannel>
  );
}

export default Index;
