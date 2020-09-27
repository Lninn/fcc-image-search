import React from "react";
import classNames from "classnames";
import "./index.less";

function Index(props) {
  const { header, children, contentStyle, className, ...rest } = props;

  let headerCotent;
  if (!header) {
    headerCotent = null;
  } else {
    headerCotent = <div className="header">{header}</div>;
  }

  const cls = classNames("panel", className);

  return (
    <div className={cls} {...rest}>
      {headerCotent}
      <div className="content" style={contentStyle}>
        {children}
      </div>
    </div>
  );
}

export default Index;
