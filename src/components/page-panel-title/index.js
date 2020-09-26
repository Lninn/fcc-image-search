import React from 'react';
import { Link } from 'react-router-dom';

function Index({ pageTitle }) {
  return  (
    <div className='page-panel-title'>
      <Link to='/'>主页</Link>
      <span className='divider'>/</span>
      <span className='title'>{pageTitle}</span>
    </div>
  );
}

export default Index;
