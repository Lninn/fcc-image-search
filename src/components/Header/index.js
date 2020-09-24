import React from 'react';
import './index.less';
import {
  Link
} from "react-router-dom";

function Index() {
  return (
    <header className="app-header">
      <div className="app-header-inner">
        <a href="#" className="logo">
          <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt="logo" />
        </a>

        <form className="search-form">
          <input type="text" />
        </form>

        <div className="menu-wrapper">
          <ul className="menu">
            <li>
              <Link to="/home">首页</Link>
            </li>
            <li>
              <Link to="/Doc">新手入门</Link>
            </li>
            <li>
              <Link to="/About">API</Link>
            </li>
            <li>
              <Link to="/About">关于</Link>
            </li>
            <li>
              <Link to="/About">注册</Link>
            </li>
            <li>
              <Link to="/About">登陆</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Index;
