import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.less';
import Layout from './components/basic-layout';

import { routes } from './router';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                {routes.map((route, i) => (
                  <Route
                    key={i}
                    path={route.path}
                    render={props => (
                      <route.component {...props} />
                    )}
                  />
                ))}
                <Redirect from="/" to="/home" />
              </Switch>
            </Suspense>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
