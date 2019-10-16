import React from 'react';
import { FirebaseContext } from './Firebase';

const Users = () => (
  <FirebaseContext.Consumer>
    {firebase => {
      const onButtonClick = () => {
        firebase.analytics.logEvent('exercise_completion', {
          name: 'quantumleap',
        });
      };
      firebase.analytics.logEvent('Users_page_opened', {
        page: 'Users',
        date: Date.now(),
      });
      return (
        <>
          <h1>Users</h1>
          <button onClick={onButtonClick}>Button</button>
        </>
      );
    }}
  </FirebaseContext.Consumer>
);

export default Users;
