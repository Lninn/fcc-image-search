import React from 'react';
import './index.less';
import Header from '../Header';

function Index({ children }) {
  return (
    <div className="layout">
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
}

export default Index;
