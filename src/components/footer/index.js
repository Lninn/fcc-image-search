import React from "react";

function Index() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="links">
          <a href="/">RSS</a>
          <span>|</span>
          <a href="/">源码地址</a>
        </div>

        <p>
          CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js
          的技术研究。
        </p>

        <div className="ad">
          <span>服务器赞助商为</span>
          <img
            src="https://static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9"
            alt="ad img"
          />
          <span>储存赞助商为</span>
          <img
            src="https://static.cnodejs.org/Fg0jtDIcTqVC049oVu5-sn6Om4NX"
            alt="ad img"
          />
          <span>由</span>
          <img
            src="https://static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD"
            alt="ad img"
          />
          <span>提供应用性能服务。</span>
        </div>

        <p>
          新手搭建 Node.js 服务器，推荐使用无需备案的
          <a
            className="link"
            href="https://www.digitalocean.com/?refcode=eba02656eeb3"
          >
            DigitalOcean(https://www.digitalocean.com/)
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Index;
