import React from 'react';

function Index({ title, children }) {
  return (
    <div className='content-card'>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default Index;