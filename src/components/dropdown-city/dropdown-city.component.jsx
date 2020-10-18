import React from "react";
import styles from "./dropdown-city.module.css";

//DATA
import { CITIES } from "../../data/cities";

const DropdownCity = ({getCity,defaultValue}) => {
  console.log(defaultValue);

  const getSelectedValue = (e) =>{
    console.log(e.target.value);
    getCity(e.target.value)
  }

  return (
    <select id="city-input" className={styles.container} value={defaultValue} onChange={(e)=>getSelectedValue(e)}>
      {CITIES.map(city => {
        return <option key={city.id}>{city.name}</option>;
      })}
    </select>
  );
};

export default DropdownCity;
