import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/layout/Layout';
import FitnessGuru from './containers/fitnessguru/FitnessGuru';


class App extends Component {
  render() {
    return (
      <Layout>
        <FitnessGuru/>
      </Layout>
    );
  }
}

export default App;
