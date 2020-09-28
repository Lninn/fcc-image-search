import React from "react";
import { useLocation } from "react-router-dom";
import {
  TitlePanel,
  AdPanel,
  RankingPanel,
  AboutPanel,
  NoRepliesTopicPanel,
  FriendlyCommunityPanel,
  QRcodePanel,
} from "@components";

function Index() {
  const { pathname } = useLocation();

  switch (pathname) {
    case "/home":
      return (
        <>
          <TitlePanel />
          <AdPanel />
          <NoRepliesTopicPanel />
          <RankingPanel />
          <FriendlyCommunityPanel />
          <QRcodePanel />
        </>
      );
    case "/getting-started":
    case "/about":
    case "/setting":
      return (
        <>
          <TitlePanel />
          <AdPanel />
          <FriendlyCommunityPanel />
          <QRcodePanel />
        </>
      );
    case "/api":
      return null;
    case "/signin":
    case "/signup":
      return <AboutPanel />;
    default:
      return null;
  }
}

export default Index;
