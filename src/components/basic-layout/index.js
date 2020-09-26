import React from 'react';
import './index.less';
import Header from '@components/header';
import Footer from '@components/footer';
import SiderBar from '@components/side-bar';

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
      <Footer />
    </div>
  );
}

export default Index;
