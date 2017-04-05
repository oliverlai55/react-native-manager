import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;

// Provider makes sure the connect and store all connect
