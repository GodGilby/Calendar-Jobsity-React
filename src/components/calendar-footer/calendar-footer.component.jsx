import React from 'react';
import styles from "./calendar-footer.module.css"

//Redux
import {connect} from "react-redux";
import {setDays} from "../../redux/actions/calendarAction"

//DATA
import {CALENDAR_DAYS} from "../../data/calendar";

const CalendarFooter = ({setMonthData}) => {

    const setMonth = (position) =>{
        console.log(position);
        const x = Object.values(CALENDAR_DAYS);
        console.log(x[position -1]);

        setMonthData(x[position - 1]);
    }

    return (
        <div className={styles.container}>
            {Object.keys(CALENDAR_DAYS).map((c,index) =>{
                console.log(c[1])
                return(
                    <div className={styles.boxContainer}>
                        <div className={styles.box} onClick={() =>setMonth(c)}>{c}</div>
                    </div>
                )
            })}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setMonthData: days => dispatch(setDays(days))
  })


export default connect(null,mapDispatchToProps)(CalendarFooter);