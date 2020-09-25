import React from 'react';
import './index.less';
import Header from '../header';
import SiderBar from '../side-bar';

function Index({ children }) {
  return (
    <div className="layout">
      <Header />
      <div className="content-wrapper">
        <SiderBar />
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Index;
