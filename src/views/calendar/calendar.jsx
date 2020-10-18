import React from "react";
import styles from "./calendar.module.css"

//Components
import CalendarHeader from "../../components/calendar-header/calendar-header.component";
import CalendarBody from "../../components/calendar-body/calendar-body.component";
import CalendarFooter from "../../components/calendar-footer/calendar-footer.component";

const Calendar = () => {
  return (
    <div className={styles.container}>
        <CalendarHeader></CalendarHeader>
        <CalendarBody></CalendarBody>
        <CalendarFooter></CalendarFooter>
    </div>
  );
};

export default Calendar;
