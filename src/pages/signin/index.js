import React from 'react';
import Panel from '@components/panel';
import PagePanelTitle from '@components/page-panel-title';
import './index.less';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!username || !password) {
      alert('请填写完整的信息！');
    }
  }

  return (
    <form onSubmit={handleSubmit} className='login-from'>
      <div className='control-group'>
        <div className='control-label'>
          <label htmlFor='username'>用户名</label>
        </div>
        <div className="control-input">
          <input
            id='username'
            type='text'
            maxLength='30'
            autoComplete='username'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
      </div>

      <div className='control-group'>
        <div className='control-label'>
          <label htmlFor='password'>密码</label>
        </div>
        <div className='control-input'>
          <input
            id='password'
            type='password'
            autoComplete='current-password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className='control-group group-btn'>
        <button className='btn login-btn'>登 录</button>
        <button className='btn login-github-btn'>通过 Github 登录</button>
        <Link to='/forget-passwd' className='forget-passwd'>忘记密码了吗？</Link>
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
