import React from 'react';
import Panel from '../panel';

function Index() {
  return (
    <Panel header='关于' className="about-panel">
      <p>CNode：Node.js专业中文社区</p>

      <p>在这里你可以：</p>
      <ul>
        <li>向别人提出你遇到的问题</li>
        <li>帮助遇到问题的人</li>
        <li>分享自己的知识</li>
        <li>和其它人一起进步</li>
      </ul>
    </Panel>
  );
}

export default Index;
