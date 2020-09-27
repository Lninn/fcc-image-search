import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import App from "./App";

export const AppContext = React.createContext({
  tab: "全部",
  changeTab: function () {},
});

function Main({ children }) {
  const [tab, setTab] = React.useState("全部");

  const context = {
    tab,
    changeTab: setTab,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

ReactDOM.render(
  <Main>
    <App />
  </Main>,
  document.getElementById("root"),
);
