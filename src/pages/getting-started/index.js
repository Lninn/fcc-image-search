import React from 'react';
import Panel from '@components/panel';
import PagePanelTitle from '@components/page-panel-title';
import ContentCard from '@src/components/content-card';

function Index() {
  return (
    <div className="getting-started-page">
      <Panel header={<PagePanelTitle pageTitle='Node.js 新手入门' />}>
        <ContentCard title='Node.js 入门'>
          <p>《快速搭建 Node.js 开发环境以及加速 npm》</p>
          <p>
            <a href='http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html'>
              http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html
            </a>
          </p>

          <p>《Node.js 包教不包会》</p>
          <p>
            <a href='https://github.com/alsotang/node-lessons'>
              https://github.com/alsotang/node-lessons
            </a>
          </p>

          <p>《ECMAScript 6入门》</p>
          <p>
            <a href='http://es6.ruanyifeng.com/'>
              http://es6.ruanyifeng.com/
            </a>
          </p>

          <p>《七天学会NodeJS》</p>
          <p>
            <a href='https://github.com/nqdeng/7-days-nodejs'>
              https://github.com/nqdeng/7-days-nodejs
            </a>
          </p>
        </ContentCard>
        <ContentCard title='Node.js 资源'>
          <p>《前端资源教程》</p>
          <p>
            <a href='https://cnodejs.org/topic/56ef3edd532839c33a99d00e'>
              https://cnodejs.org/topic/56ef3edd532839c33a99d00e
            </a>
          </p>

          <p>《国内的 npm 镜像源》</p>
          <p>
            <a href='http://cnpmjs.org/'>
              http://cnpmjs.org/
            </a>
          </p>

          <p>《node weekly》</p>
          <p>
            <a href='http://nodeweekly.com/issues'>
              http://nodeweekly.com/issues
            </a>
          </p>

          <p>《node123-node.js中文资料导航》</p>
          <p>
            <a href='https://github.com/youyudehexie/node123'>
              https://github.com/youyudehexie/node123
            </a>
          </p>

          <p>《A curated list of delightful Node.js packages and resources》</p>
          <p>
            <a href='https://github.com/sindresorhus/awesome-nodejs'>
              https://github.com/sindresorhus/awesome-nodejs
            </a>
          </p>

          <p>《Node.js Books》</p>
          <p>
            <a href='https://github.com/pana/node-books'>
              https://github.com/pana/node-books
            </a>
          </p>
        </ContentCard>

        <ContentCard title='Node.js 名人'>
          <p>《名人堂》</p>
          <p>
            <a href='https://github.com/cnodejs/nodeclub/wiki/名人堂'>
              https://github.com/cnodejs/nodeclub/wiki/名人堂
            </a>
          </p>
        </ContentCard>

        <ContentCard title='Node.js 服务器'>
          <p>新手搭建 Node.js 服务器，推荐使用无需备案的 DigitalOcean(https://www.digitalocean.com/)</p>
        </ContentCard>
      </Panel>
    </div>
  );
}

export default Index;
