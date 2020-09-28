import React from "react";
import { Header, Footer, SideBar } from "@components";

function Index({ children }) {
  return (
    <div className="layout">
      <header className="app-header">
        <Header />
      </header>
      <div className="content-wrapper">
        <main className="main-content">{children}</main>
        <aside className="side-bar">
          <SideBar />
        </aside>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
