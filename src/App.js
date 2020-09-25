import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.less';
import Layout from './components/basic-layout';
import Home from './pages/home';
import About from './pages/about';

function Users() {
  return <h2>Users</h2>;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
            <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
