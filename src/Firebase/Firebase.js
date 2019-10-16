import app from 'firebase/app';
import 'firebase/remote-config';
import 'firebase/analytics';
import 'firebase/performance';

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

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.remoteConfig = app.remoteConfig();

    this.remoteConfig.settings = {
      minimumFetchIntervalMillis: 3600000,
    };

    this.analytics = app.analytics();
    this.performance = app.performance();
  }
}

export default Firebase;
