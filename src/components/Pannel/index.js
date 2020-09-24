import React from 'react';
import './index.less';

function Index(props) {
  const { title, children } = props;
  
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
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default Index;
