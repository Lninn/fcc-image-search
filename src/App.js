import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.less';
import Layout from './components/Layout'

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

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
