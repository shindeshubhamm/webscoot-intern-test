import React from 'react';
import Layout from './components/Layout/Layout'
import News from './components/News/News'
import { Provider } from 'react-redux'
import store from './store'
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <News />
      </Layout>
    </Provider>

  );
}

export default App;
