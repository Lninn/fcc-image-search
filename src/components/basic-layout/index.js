import React from "react";
import "./index.less";
import Header from "@components/header";
import Footer from "@components/footer";
import SiderBar from "@components/side-bar";

function Index({ children }) {
  return (
    <div className="layout">
      <header className="app-header">
        <Header />
      </header>
      <div className="content-wrapper">
        <main className="main-content">{children}</main>
        <aside className="side-bar">
          <SiderBar />
        </aside>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
