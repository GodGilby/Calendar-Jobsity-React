import React from "react";
import styles from "./calendar-footer.module.css";

//Redux
import { connect } from "react-redux";
import { setDays } from "../../redux/actions/calendarAction";

//DATA
import { CALENDAR_DAYS } from "../../data/calendar";
import { getMonthName } from "../../utils/utils";

const CalendarFooter = ({ setMonthData, Calendar }) => {
  const setMonth = position => {
    const monthNumbers = Object.values(CALENDAR_DAYS);
    setMonthData(monthNumbers[position - 1]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.monthName}>{getMonthName(Calendar[10].month)}</div>
      <div className={styles.boxContainer}>
        {Object.keys(CALENDAR_DAYS).map((monthNumber, index) => {
          return (
              <div key={index} className={styles.box} onClick={() => setMonth(monthNumber)}>
                {monthNumber}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = ({ Calendar }) => ({
  Calendar: Calendar.days
});

const mapDispatchToProps = dispatch => ({
  setMonthData: days => dispatch(setDays(days))
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarFooter);
