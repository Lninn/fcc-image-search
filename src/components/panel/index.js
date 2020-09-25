import React from 'react';
import './index.less';

function Index(props) {
  const { header, children, contentStyle } = props;
  
  let headerCotent;
  if (!header) {
    headerCotent = null;
  } else {
    headerCotent = (
      <div className="header">
        {header}
      </div>
    );
  }

  return (
    <div className="panel">
      {headerCotent}
      <div className="content" style={contentStyle}>
        {children}
      </div>
    </div>
  );
}

export default Index;
