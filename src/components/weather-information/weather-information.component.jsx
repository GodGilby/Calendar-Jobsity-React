import React from "react";
import styles from "./weather-information.module.css";

const WeatherInformation = ({ status, humidity, temperature, feels_like }) => {

  const celsius = temperature - 273;
  const fahrenheit = Math.floor(celsius * (9 / 5) + 32);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.title}>Status</div>
        <div>{status}</div>
      </div>
      <div className={styles.box}>
        <div className={styles.title}>Humidity</div>
        <div>{humidity}</div>
      </div>
      <div className={styles.box}>
        <div className={styles.title}>Temperature</div>
        <div>{fahrenheit} fahrenheit</div>
      </div>
      <div className={styles.box}>
        <div className={styles.title}>Feels Like</div>
        <div>{feels_like}</div>
      </div>
    </div>
  );
};

export default WeatherInformation;
