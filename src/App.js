import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCkuV6Mc1wWJqFFM3XQZsQT8pfQyJcMdZ4',
      authDomain: 'manager-545b1.firebaseapp.com',
      databaseURL: 'https://manager-545b1.firebaseio.com',
      projectId: 'manager-545b1',
      storageBucket: 'manager-545b1.appspot.com',
      messagingSenderId: '943493753625'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
