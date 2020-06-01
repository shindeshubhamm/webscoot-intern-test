import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import News from './components/News/News'
import { Provider } from 'react-redux'
import store from './store'
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/' component={News} />
            {/* <Route component={News} /> */}
          </Switch>
        </Layout>
      </Router>
    </Provider>

  );
}

export default App;
