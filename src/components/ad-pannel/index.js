import React from 'react';
import Pannel from '../pannel';

function Index() {
  const ads = [
    {
      id: '1',
      url: 'https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_',
    },
    {
      id: '2',
      url: 'https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS',
    },
    {
      id: '3',
      url: 'https://static.cnodejs.org/FgIok2ZlDer2QOb8sJ20S9Y8T2Jq',
    },
  ];

  return (
    <Pannel>
      {ads.map(ad => {
        return (
          <a href="/ad" key={ad.id}>
            <img src={ad.url} alt="ad img" />
          </a>
        )
      })}
    </Pannel>
  );
}

export default Index;
