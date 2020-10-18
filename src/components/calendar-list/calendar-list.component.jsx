import React, { useState } from "react";
import styles from "./calendar-list.module.css";

//Components
import ReminderModal from "../modal/modal.component";

const CalendarList = ({ reminders, day }) => {
  console.log(reminders, day);

  const [open, setOpen] = useState(false);
  const [modalData,setModalData] = useState({});

  const openModal = (reminder) => {
    setModalData(reminder);
    setOpen(true);
  }

  return (
    <div className={styles.container}>
      {reminders.length != 0
        ? reminders
            .filter(
              reminderExist =>
                reminderExist.date.substring(8, reminderExist.length) == day
            )
            .map(reminder => {
              console.log(reminder);
              return (
                <div
                  className={styles.boxContainer}
                  onClick={() => openModal(reminder)}
                >
                  <div className={styles.box1}>
                    <div
                      className={styles.circleBox}
                      style={{
                        background: reminder.color ? reminder.color : "white"
                      }}
                    ></div>
                    <div className={styles.title}>{reminder.title}</div>
                  </div>
                  <div className={styles.box2}>
                    <div>{reminder.time}</div>
                    <div>{reminder.weather.status}</div>
                  </div>
                </div>
              );
            })
        : null}

      {open ? (
        <ReminderModal
          isOpen={open}
          setOpen={() => setOpen(false)}
          day={day}
          data={modalData}
          edit={true}
        ></ReminderModal>
      ) : null}
    </div>
  );
};

export default CalendarList;
