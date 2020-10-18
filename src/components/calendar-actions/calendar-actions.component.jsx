import React, { useState } from "react";
import styles from "./calendar-actions.module.css";

//Redux
import { connect } from "react-redux";
import {deleteAllReminders} from "../../redux/actions/reminderAction"

//Components
import ReminderModal from "../reminder-modal/modal.component";

const CalendarActions = ({day,isWeekend,deleteAllReminders}) => {

  const [open, setOpen] = useState(false);

  const onDelete = () =>{
    console.log(day);
    deleteAllReminders({
      day: day
    });
  }

  return (
    <>
      <div className={styles.container}>
        <div style={{ color: isWeekend ? "blue" : "black" }}>{day}</div>
        <div>
          <button onClick={() => setOpen(true)}>Add</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      </div>

      {open ? (
        <ReminderModal
          isOpen={open}
          setOpen={() => setOpen(false)}
          day={day}
          edit={false}
        ></ReminderModal>
      ) : null}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteAllReminders: day => dispatch(deleteAllReminders(day))
});

export default connect(null, mapDispatchToProps)(CalendarActions);
