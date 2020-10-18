import React from "react";
import styles from "./calendar-list.module.css";

const CalendarList = ({ reminders, day }) => {
  console.log(reminders, day);

  return (
    <div className={styles.container}>
      {reminders.length != 0
        ? reminders
            .filter(
              reminderExist =>
                reminderExist.date.substring(8, reminderExist.length) == day
            )
            .map(reminder => {
              return (
                <div className={styles.boxContainer}>
                  <div className={styles.box1}>
                    <div
                      className={styles.circleBox}
                      style={{
                        background: reminder.color ? reminder.color : "white"
                      }}
                    ></div>
                    <div className={styles.title}>{reminder.title}</div>
                  </div>
                  <div className={styles.box2}>{reminder.time}</div>
                </div>
              );
            })
        : null}
    </div>
  );
};

export default CalendarList;
