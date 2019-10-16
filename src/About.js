import React from 'react';
import { FirebaseContext } from './Firebase';

const About = () => (
  <FirebaseContext.Consumer>
    {firebase => {
      const onButtonClick = () => {
        firebase.analytics.logEvent('exercise_completion', {
          name: 'pathfinder',
        });
      };
      firebase.analytics.logEvent('About_page_opened', {
        page: 'About',
        date: Date.now(),
      });
      return (
        <>
          <h1>About</h1>
          <button onClick={onButtonClick}>Button</button>
        </>
      );
    }}
  </FirebaseContext.Consumer>
);

export default About;
