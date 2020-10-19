import React, { useState } from "react";
import { Modal } from "semantic-ui-react";
import styles from "./modal.module.css";
import { randomGeneratorID } from "../../utils/utils";

//Components
import DropdownCity from "../dropdown-city/dropdown-city.component";
import WeatherInformation from "../weather-information/weather-information.component";
import { SketchPicker } from "react-color";

const ModalUI = ({
  isOpen,
  setOpen,
  setReminder,
  setWeather,
  updateReminder,
  removeReminder,
  weather,
  data,
  edit
}) => {
  const getId = randomGeneratorID();

  const [title, setTitle] = useState(data ? data.title : "");
  const [date, setDate] = useState(
    data ? data.date : new Date().toLocaleDateString()
  );
  const [time, setTime] = useState(
    data ? data.time : new Date().toLocaleTimeString()
  );
  const [color, setColor] = useState(data ? data.color : "#5545a3");
  const [city, setCity] = useState(data ? data.city : "");
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [count, setCount] = useState(0);
  const [id] = useState(data ? data.id : getId);

  const onSubmit = e => {
    e.preventDefault();
    if (title.length === 0 || city.length === 0) {
      alert("Please fill the information");
      return;
    }
    let reminder = {
      title,
      date,
      time,
      color,
      city,
      weather,
      id
    };
    setOpen(false);
    if(!edit){
      setReminder(reminder);
    }else{
      updateReminder(reminder);
    }
  };

  const onDelete = e => {
    e.preventDefault();
    setOpen(false);
    removeReminder({
      id: id
    });
  };

  const fetchingWeather = data => {
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
      <Modal.Header>
        <div className={styles.header}>
          <div>Reminder</div>
          {edit ? (
            <button className={styles.buttonDelete} onClick={onDelete}>
              Delete
            </button>
          ) : null}
        </div>
      </Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <form style={{ display: "flex" }}>
            <div style={{ flex: 3 }}>
              <div className={styles.container}>
                <div className={styles.titleBox}>
                  <div className={styles.title}>Title</div>
                  <div style={{ color: count >= 30 ? "red" : "black" }}>
                    Max Length: {count}
                  </div>
                </div>
                <input
                  name="title"
                  id="title-input"
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
                    if (title.length === 0) {
                      setCount(0);
                    } else if (e.keyCode === 8) {
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
                  id="date-input"
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
                  id="time-input"
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
                  defaultValue={city}
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
                <button
                  className={styles.buttonSuccess}
                  type="submit"
                  onClick={onSubmit}
                  id="submitBtn"
                >
                  {edit ? "Update" : "Create"}
                </button>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              {weather && city.length != 0 ? (
                <WeatherInformation {...weather}></WeatherInformation>
              ) : null}
            </div>
          </form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default ModalUI;
