import React, { Component } from 'react';
import Quotations from './components/quotations'

class CoreApp extends Component {
  render() {
    return (
      <div>
        <h3>Sample Heroku Application (ReactJs + webpack + Redux) </h3>
        <Quotations/>
      </div>
    );
  }
}

export default CoreApp;
