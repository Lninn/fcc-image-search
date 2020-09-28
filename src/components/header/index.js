import React from "react";
import { Link } from "react-router-dom";

function Index(props) {
  const publicMenus = [
    {
      name: "首页",
      path: "/home",
    },
    {
      name: "新手入门",
      path: "/getting-started",
    },
    {
      name: "API",
      path: "/api",
    },
    {
      name: "关于",
      path: "/about",
    },
    {
      name: "登陆",
      path: "/signin",
    },
    {
      name: "注册",
      path: "/signup",
    },
  ];

  const authMenus = [
    {
      name: "首页",
      path: "/home",
    },
    {
      name: '未读消息',
      path: "/unread-message",
    },
    {
      name: "新手入门",
      path: "/getting-started",
    },
    {
      name: "API",
      path: "/api",
    },
    {
      name: "关于",
      path: "/about",
    },
    {
      name: "设置",
      path: "setting",
    },
    {
      name: "退出",
      path: "/exit",
    },
  ];

  // const menus = props.auth ? authMenus : publicMenus;
  const menus = true ? authMenus : publicMenus;

  return (
    <div className="app-header-inner">
      <a href="/dev" className="logo">
        <img
          src="https://static2.cnodejs.org/public/images/cnodejs_light.svg"
          alt="logo"
        />
      </a>

      <form className="search-form">
        <input type="text" />
      </form>

      <div className="menu-wrapper">
        <ul className="menu">
          {menus.map((menu) => (
            <li key={menu.name}>
              <Link to={menu.path}>{menu.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Index;
