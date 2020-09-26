import React from 'react';
import Panel from '@components/panel';
import PagePanelTitle from '@components/page-panel-title';
import './index.less';

function LoginForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className='login-from'>
      <div className='form-control'>
        <div className='form-label'>
          <label>用户名</label>
        </div>
        <div className="form-input">
          <input type='text' />
        </div>
      </div>
      <div className='form-control'>
        <div className='form-label'>
          <label>密码</label>
        </div>
        <div className="form-input">
          <input type='text' />
        </div>
      </div>
      <div className='form-control'>
        <button>登录</button>
      </div>
    </form>
  );
}

function Index() {
  return (
    <div className="signin-page">
      <Panel header={<PagePanelTitle pageTitle='登陆' />}>
        <LoginForm />
      </Panel>
    </div>
  );
}

export default Index;
