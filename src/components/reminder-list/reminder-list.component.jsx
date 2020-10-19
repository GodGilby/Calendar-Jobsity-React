import React, { useState } from "react";
import styles from "./reminder-list.module.css";

//Components
import ReminderModal from "../reminder-modal/modal.component";

const CalendarList = ({ reminders, day, month }) => {

  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModal = reminder => {
    setModalData(reminder);
    setOpen(true);
  };

  return (
    <div className={styles.container}>
      {reminders.length != 0
        ? reminders
            .filter(
              reminderExist =>
                reminderExist.date.substring(8, reminderExist.length) == day &&
                reminderExist.date.substring(5, 7) == month
            )
            .map(reminder => {
              return (
                <div
                  key={reminder.id}
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
                    <div className={styles.title}>
                      {reminder.title? reminder.title.substring(0, 5) + " ...": "N/A"}
                    </div>
                  </div>
                  <div className={styles.box2}>
                    <div>{reminder.time? reminder.time : "N/A"}</div>
                    <div>{reminder.weather ? reminder.weather.status: "N/A"}</div>
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
