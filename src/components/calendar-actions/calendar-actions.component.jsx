import React, { useState } from "react";
import styles from "./calendar-actions.module.css";

//Redux
import { connect } from "react-redux";

//Components
import ReminderModal from "../modal/modal.component";

const CalendarActions = props => {
  const { day, isWeekend } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <div style={{ color: isWeekend ? "blue" : "black" }}>{day}</div>
        <div>
          <button onClick={() => setOpen(true)}>Add</button>
          <button>Delete</button>
        </div>
      </div>

      {open ? (
        <ReminderModal
          isOpen={open}
          setOpen={() => setOpen(false)}
          day={day}
        ></ReminderModal>
      ) : null}
    </>
  );
};

// const mapDispatchToProps = () => {};

export default connect(null, null)(CalendarActions);
