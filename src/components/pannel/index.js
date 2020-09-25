import React from 'react';
import './index.less';

function Index(props) {
  const { title, children, contentStyle } = props;
  
  let header;
  if (!title) {
    header = null;
  } else {
    header = (
      <div className="header">
        {title}
      </div>
    );
  }

  return (
    <div className="pannel">
      {header}
      <div className="content" style={contentStyle}>
        {children}
      </div>
    </div>
  );
}

export default Index;
