import React from "react";
import Panel from "@src/components/panel";
import { PagePanelTitle, ContentCard } from "@src/components";

function Index() {
  return (
    <div className="about-page">
      <Panel header={<PagePanelTitle pageTitle="关于" />}>
        <ContentCard title="关于">
          <p>
            CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于
            Node.js 的技术研究。
          </p>
          <p>
            CNode 社区由一批热爱 Node.js
            技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对
            Node.js 感兴趣的朋友。
          </p>
          <p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
          <p>
            社区目前由 <a href="/">@alsotang</a> 在维护，有问题请联系:
            <a href="https://github.com/alsotang">
              https://github.com/alsotang
            </a>
            。
          </p>
          <p>
            请关注我们的官方微博：
            <a href="http://weibo.com/cnodejs">http://weibo.com/cnodejs</a>。
          </p>
        </ContentCard>

        <ContentCard title="移动客户端">
          <p>
            客户端由 <a href="/">@soliury</a> 开发维护。
          </p>
          <p>
            源码地址:
            <a href="https://github.com/soliury/noder-react-native">
              https://github.com/soliury/noder-react-native
            </a>
            。
          </p>
          <p>立即体验 CNode 客户端，直接扫描页面右侧二维码。</p>
          <p>
            另，安卓用户同时可选择：
            <a href="https://github.com/TakWolf/CNode-Material-Design">
              https://github.com/TakWolf/CNode-Material-Design
            </a>
            ， 这是 Java 原生开发的安卓客户端。
          </p>
        </ContentCard>

        <ContentCard title="友情链接">
          <a href="https://www.sxl.cn">
            <img
              src="//static.cnodejs.org/FvtwcYi5K6qoFAIsUeIgTKGeB6lQ"
              alt="ad"
            />
          </a>

          <a href="https://www.huoban.com/">
            <img
              src="//static.cnodejs.org/Ftmw28ed0I_rir7YYz3c_jVPkCGx"
              alt="ad"
            />
          </a>

          <a href="http://100offer.com/">
            <img
              src="//static.cnodejs.org/FmU1Ik57z6wrl9JDTNdcYBTDetFq"
              alt="ad"
            />
          </a>

          <a href="https://www.teambition.com/">
            <img
              src="//static.cnodejs.org/FkMR_SqpCp4Q0eDIaWrQlALiXdmP"
              alt="ad"
            />
          </a>

          <a href="http://segmentfault.com/">
            <img
              src="//static2.cnodejs.org/public/images/temp/sf.png"
              alt="ad"
            />
          </a>
        </ContentCard>

        <ContentCard title="LOGO">
          <p>
            白底：
            <a href="/public/images/cnodejs.svg">/public/images/cnodejs.svg</a>
          </p>
          <p>
            黑底：
            <a href="/public/images/cnodejs_light.svg">
              /public/images/cnodejs_light.svg
            </a>
          </p>
        </ContentCard>
      </Panel>
    </div>
  );
}

export default Index;
