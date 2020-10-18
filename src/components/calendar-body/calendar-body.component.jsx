import React from "react";
import styles from "./calendar-body.module.css";

//Data
import {CALENDAR_DAYS} from "../../data/calendar";

//Redux
import { connect } from "react-redux";
import {setDays} from "../../redux/actions/calendarAction"

//Components
import CalendarActions from "../calendar-actions/calendar-actions.component";
import CalendarList from "../reminder-list/reminder-list.component";


const CalendarBody = ({Calendar,Reminder}) => {

  console.log(Reminder,Calendar);

  return (
    <div className={styles.container}>
      <div className={styles.boxContainer}>
        {Calendar.map(({disabled,isWeekend,day,month},index)=>{
          console.log(day);
          return(
            <div 
              key={index}
              style={{backgroundColor: disabled? "#F2F2F2": "white"}} 
              className={styles.box}>
                <CalendarActions  isWeekend={isWeekend} day={day}></CalendarActions>
                <CalendarList reminders={Reminder? Reminder: []} day={day} month={month}></CalendarList>
              </div>
          )
        })}
      </div>
    </div>
  );
};

const mapStateToProps = ({ Calendar,Reminder }) => ({
  Calendar: Calendar.days,
  Reminder: Reminder.reminders
});

const mapDispatchToProps = dispatch => ({
  setDays: dispatch(setDays(CALENDAR_DAYS[1]))
})

export default connect(mapStateToProps,mapDispatchToProps)(CalendarBody);
