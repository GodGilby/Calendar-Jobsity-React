import React from 'react';
import styles from './App.css';

//Views
import Calendar from "./views/calendar/calendar";

const App = () => {
  return (
    <div className={styles.container}>
      <Calendar></Calendar>
    </div>
  );
}

export default App;
