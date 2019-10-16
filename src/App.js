import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FirebaseContext } from './Firebase';

import About from './About';
import Home from './Home';
import Users from './Users';

const App = () => (
  <FirebaseContext.Consumer>
    {firebase => {
      firebase.remoteConfig
        .fetchAndActivate()
        .then(() => {
          const holidayPromo = JSON.parse(
            firebase.remoteConfig.getValue('holiday_promo')._value
          );
          console.log('holidayPromo: ', holidayPromo);
          const google = JSON.parse(
            firebase.remoteConfig.getValue('google')._value
          );
          console.log('Google: ', google);
          const newOne = JSON.parse(
            firebase.remoteConfig.getValue('new_one')._value
              ? firebase.remoteConfig.getValue('new_one')._value
              : '{}'
          );
          console.log('newOne: ', newOne);
        })
        .catch(err => {
          console.error(err);
        });

      firebase.analytics.logEvent('App_initialized');

      return (
        <div className='App'>
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <Link to='/about'>About</Link>
                  </li>
                  <li>
                    <Link to='/users'>Users</Link>
                  </li>
                </ul>
              </nav>

              <Switch>
                <Route path='/about'>
                  <About />
                </Route>
                <Route path='/users'>
                  <Users />
                </Route>
                <Route path='/'>
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      );
    }}
  </FirebaseContext.Consumer>
);

export default App;
