import React from "react";
import styles from "./dropdown-city.module.css";

//DATA
import { CITIES } from "../../data/cities";

const DropdownCity = ({getCity}) => {

  const getSelectedValue = (e) =>{
    console.log(e.target.value);
    getCity(e.target.value)
  }

  return (
    <select className={styles.container} onChange={(e)=>getSelectedValue(e)}>
      {CITIES.map(city => {
        return <option key={city.id} value={city.name}>{city.name}</option>;
      })}
    </select>
  );
};

export default DropdownCity;
