import React, { Component } from 'react';
import CoreApp from './CoreApp'

import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducers from './reducers'

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))
CoreApp.store = store;

class App extends Component {
  render() {
    return <Provider store={store}>
        <div className="App">
          <CoreApp/>
        </div>
    </Provider>;
  }
}

export default App;
