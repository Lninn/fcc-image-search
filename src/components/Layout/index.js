import React from 'react';
import './index.less';
import Header from '../Header';

function Index({ children }) {
  return (
    <div className="layout">
      <Header />
      <main style={{ minHeight: 400 }}>
        {children}
      </main>
    </div>
  );
}

export default Index;
