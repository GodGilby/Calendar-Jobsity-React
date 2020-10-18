import React from "react";
import styles from "./dropdown-city.module.css";

//DATA
import { CITIES } from "../../data/cities";

const DropdownCity = ({getCity,data}) => {
  console.log(data);

  const selectedCity = CITIES.filter((city) => city.name == data);

  const getSelectedValue = (e) =>{
    console.log(e.target.value);
    getCity(e.target.value)
  }

  return (
    <select className={styles.container} onChange={(e)=>getSelectedValue(e)}>
      {CITIES.map(city => {
        return <option key={city.id} value={data || city.name} selected>{city.name}</option>;
      })}
    </select>
  );
};

export default DropdownCity;
