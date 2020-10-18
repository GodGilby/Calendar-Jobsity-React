import React, { useState } from "react";
import { Modal } from "semantic-ui-react";
import styles from "./modal.module.css";
import {randomGeneratorID} from "../../utils/utils";

//Redux
import { connect } from "react-redux";
import { setReminder, setWeather, updateReminder} from "../../redux/actions/reminderAction";

//Components
import DropdownCity from "../dropdown-city/dropdown-city.component";
import WeatherInformation from "../weather-information/weather-information.component";
import { SketchPicker } from "react-color";

const ReminderModal = ({
  isOpen,
  setOpen,
  setReminder,
  setWeather,
  updateReminder,
  weather,
  data,
  edit
}) => {
  console.log("Esta abierto? :", isOpen);

  const getId = randomGeneratorID();

  const [title, setTitle] = useState(data? data.title: "");
  const [date, setDate] = useState(data? data.date: null);
  const [time, setTime] = useState(data? data.time: null);
  const [color, setColor] = useState(data? data.color: "#5545a3");
  const [city, setCity] = useState(data? data.city: "");
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [count, setCount] = useState(0);
  const [id] = useState(data? data.id: getId)

  console.log(weather);

  const onSubmit = e => {
    e.preventDefault();
    console.log("Se esta subiendo", title, date, time, color, city);
    let reminder = {
      title,
      date,
      time,
      color,
      city,
      weather,
      id
    };
    console.log(reminder);
    setOpen(false);
    if(!edit){
      setReminder(reminder);
    }else{
      updateReminder(reminder);
    }
  };

  const fetchingWeather = data => {
    console.log(data);
    setCity(data);
    setWeather({
      city: data
    });
  };

  return (
    <Modal
      centered={false}
      open={isOpen}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Modal.Header>Reminder</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <form style={{display: "flex"}}>
            <div style={{flex: 3}}>
              <div className={styles.container}>
                <div className={styles.titleBox}>
                  <div className={styles.title}>Title</div>
                  <div style={{ color: count >= 30 ? "red" : "black" }}>
                    Max Length: {count}
                  </div>
                </div>
                <input
                  name="title"
                  onChange={e => setTitle(e.target.value)}
                  value={title}
                  onKeyPress={() => {
                    if (count < 30) {
                      setCount(count + 1);
                    } else {
                      setCount(count);
                    }
                  }}
                  onKeyDown={e => {
                    if (title.length == 0) {
                      setCount(0);
                    } else if (e.keyCode == 8) {
                      setCount(count - 1);
                    } else {
                      setCount(count);
                    }
                  }}
                  maxLength="30"
                  className={styles.input}
                  placeholder="Title only 30 characters..."
                />
              </div>
              <div className={styles.container}>
                <div className={styles.title}>Day</div>
                <input
                  type="date"
                  name="date"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  className={styles.input}
                  placeholder="Day..."
                />
              </div>
              <div className={styles.container}>
                <div className={styles.title}>Time</div>
                <input
                  type="time"
                  name={time}
                  onChange={e => {
                    setTime(e.target.value);
                  }}
                  value={time}
                  className={styles.input}
                  placeholder="Time..."
                />
              </div>
              <div className={styles.container}>
                <div className={styles.title}>City</div>
                <DropdownCity
                  getCity={data => fetchingWeather(data)}
                  data={city}
                ></DropdownCity>
              </div>
              <div className={styles.container}>
                <div className={styles.title}>Color Picker</div>
                <div
                  className={styles.pickerContainer}
                  style={{ background: color }}
                  onClick={() => setDisplayColorPicker(true)}
                ></div>
                {displayColorPicker && (
                  <div className={styles.picker}>
                    <div onClick={() => setDisplayColorPicker(false)} />
                    <SketchPicker
                      color={color}
                      onChange={color => {
                        setColor(color.hex);
                        setDisplayColorPicker(false);
                      }}
                    ></SketchPicker>
                  </div>
                )}
              </div>
              <div className={styles.boxButton}>
                <button className={styles.button} onClick={onSubmit}>
                  {edit? "Update": "Create"}
                </button>
              </div>
            </div>
            <div style={{flex:1}}>
              {weather ? <WeatherInformation {...weather}></WeatherInformation> : null}
            </div>
          </form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

const mapStateToProps = ({ Reminder }) => ({
  weather: Reminder.weather
});

const mapDispatchToProps = dispatch => ({
  setReminder: reminder => dispatch(setReminder(reminder)),
  setWeather: reminder => dispatch(setWeather(reminder.city)),
  updateReminder: reminder => dispatch(updateReminder(reminder))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReminderModal);
