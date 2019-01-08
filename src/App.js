import React, { Component } from 'react';
import CoreApp from './CoreApp'

import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import rootReducers from './reducers'
import initialState from './reducers/initialState'

const store = createStore(rootReducers, initialState, applyMiddleware(thunk))
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
