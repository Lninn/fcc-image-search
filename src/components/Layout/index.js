import React from 'react';
import './index.less';
import Header from '../Header';
import SiderBar from '../SiderBar';

function Index({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        <SiderBar />
        {children}
      </main>
    </div>
  );
}

export default Index;
