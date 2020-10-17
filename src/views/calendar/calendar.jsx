import React from "react";
import styles from "./calendar.module.css"

//Components
import CalendarHeader from "../../components/calendar-header/calendar-header.component";
import CalendarBody from "../../components/calendar-body/calendar-body.component";

const Calendar = () => {
  return (
    <div className={styles.container}>
        <CalendarHeader></CalendarHeader>
        <CalendarBody></CalendarBody>
    </div>
  );
};

export default Calendar;
