import React from "react";
import styles from "./calendar-actions.module.css";

const CalendarActions = ( props ) => {

  const {day, isWeekend} = props;

  return (
    <div className={styles.container}>
      <div style={{color: isWeekend ? "blue": "black"}}>{day}</div>
      <button>Actions</button>
    </div>
  );
};

export default CalendarActions;
