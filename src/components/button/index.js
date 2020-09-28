import React from "react";
import classNames from 'classnames';

function Index({ children, className, ...rest }) {
  const cls = classNames(
    'btn',
    className
  );

  return (
    <button {...rest} className={cls}>{children}</button>
  );
}

export default Index;