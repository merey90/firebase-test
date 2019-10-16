import React from 'react';
import { FirebaseContext } from './Firebase';

const Home = () => (
  <FirebaseContext.Consumer>
    {firebase => {
      const onButtonClick = () => {
        firebase.analytics.logEvent('exercise_completion', {
          name: 'memobox',
        });
        const trace = firebase.performance.trace('CustomDelayedTrace');
        trace.putAttribute("experiment", "Yolooo!");
        trace.start();
        setTimeout(() => {
          trace.stop();
        }, 1000);
      };
      firebase.analytics.logEvent('Home_page_opened', {
        page: 'Home',
        date: Date.now(),
      });
      return (
        <>
          <h1>Home</h1>
          <button onClick={onButtonClick}>Button</button>
        </>
      );
    }}
  </FirebaseContext.Consumer>
);

export default Home;
