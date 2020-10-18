import React from "react";
import styles from "./calendar-body.module.css";

//Data
import {CALENDAR_DAYS} from "../../data/calendar";

//Redux
import { connect } from "react-redux";
import {setDays} from "../../redux/actions/calendarAction"

//Components
import CalendarActions from "../calendar-actions/calendar-actions.component";
import CalendarList from "../calendar-list/calendar-list.component";


const CalendarBody = ({Calendar,Reminder}) => {

  console.log(Reminder);

  return (
    <div className={styles.container}>
      <div className={styles.boxContainer}>
        {Calendar.map(({disabled,isWeekend,day},index)=>{
          return(
            <div 
              style={{backgroundColor: disabled? "#F2F2F2": "white"}} 
              className={styles.box}>
                <CalendarActions key={index} isWeekend={isWeekend} day={day}></CalendarActions>
                <CalendarList reminders={Reminder} day={day}></CalendarList>
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
  setDays: dispatch(setDays(CALENDAR_DAYS))
})

export default connect(mapStateToProps,mapDispatchToProps)(CalendarBody);
