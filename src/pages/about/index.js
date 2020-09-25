import React from 'react';
import './index.less';
import Panel from '../../components/panel';

function Index({ children }) {
  const header = (
    <div>
      <a href="/">主页</a>
      <span>/</span>
      <span>关于</span>
    </div>
  );

  return (
    <div className="about-page">
      <Panel title={header}>
        <h2>关于</h2>
        <hr />
        <p>
          CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。
        </p>
        <p>
          CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。
        </p>
      </Panel>
    </div>
  );
}

export default Index;
