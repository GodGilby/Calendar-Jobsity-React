import React from 'react';
import styles from "./calendar-header.module.css"

//Dates
import {DATES} from "../../data/dates";

const CalendarHeader = () => {
    return (
        <div className={styles.container}>
            {DATES.map((date,index)=>{
                return (
                    <div key={index} className={styles.box}>{date}</div>
                )
            })}
        </div>
    )
}

export default CalendarHeader;