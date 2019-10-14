import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/remote-config';

function App() {
  const firebaseConfig = {
    apiKey: 'AIzaSyCmErbWqb9dfMOrrYPUGa8Du4D1Rg3ws1M',
    authDomain: 'neuronation-test.firebaseapp.com',
    databaseURL: 'https://neuronation-test.firebaseio.com',
    projectId: 'neuronation-test',
    storageBucket: 'neuronation-test.appspot.com',
    messagingSenderId: '99015398255',
    appId: '1:99015398255:web:522757a5057dac7fb3ce9a',
    measurementId: 'G-YQ3M9TC5RK',
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const remoteConfig = firebase.remoteConfig();

  remoteConfig.settings = {
    minimumFetchIntervalMillis: 3600000,
  };

  remoteConfig
    .fetchAndActivate()
    .then(() => {
      const holidayPromo = JSON.parse(
        remoteConfig.getValue('holiday_promo')._value
      );
      console.log('holidayPromo: ', holidayPromo);
      const google = JSON.parse(remoteConfig.getValue('google')._value);
      console.log('Google: ', google);
      const newOne = JSON.parse(
        remoteConfig.getValue('new_one')._value
          ? remoteConfig.getValue('new_one')._value
          : '{}'
      );
      console.log('newOne: ', newOne);
    })
    .catch(err => {
      console.error(err);
    });
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
