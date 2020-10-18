import React, { useState } from "react";
import { Modal } from "semantic-ui-react";
import styles from "./modal.module.css";

//Redux
import { connect } from "react-redux";
import { setReminder } from "../../redux/actions/reminderAction";

//Components
import DropdownCity from "../dropdown-city/dropdown-city.component";
import { SketchPicker } from "react-color";

const ReminderModal = ({ isOpen, setOpen, setReminder, day }) => {
  console.log("Esta abierto? :", isOpen);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [color, setColor] = useState("#5545a3");
  const [city, setCity] = useState("");
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [count,setCount] = useState(0)

  console.log(count,color,title,date);

  const onSubmit = e => {
    e.preventDefault();
    console.log("Se esta subiendo", title, date, time, color, city);
    let reminder = {
      title,
      date,
      time,
      color,
      city
    };
    console.log(reminder);
    setReminder(reminder);
    setOpen(false);
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
          <form>
            <div className={styles.container}>
              <div className={styles.titleBox}>
                <div className={styles.title}>Title</div>
                <div style={{color: count >= 30? "red": "black"}}>Max Length: {count}</div>
              </div>
              <input
                name="title"
                onChange={e => setTitle(e.target.value)}
                value={title}
                onKeyPress={()=>{
                  if(count < 30){
                    setCount(count + 1)
                  }else{
                    setCount(count);
                  }
                }}
                onKeyDown={(e)=> {
                  if(title.length == 0){
                    setCount(0)
                  }else if(e.keyCode == 8){
                    setCount(count - 1)
                  }else{
                    setCount(count)
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
                  console.log(e);
                }}
                className={styles.input}
                placeholder="Time..."
              />
            </div>
            <div className={styles.container}>
              <div className={styles.title}>City</div>
              <DropdownCity getCity={data => setCity(data)}></DropdownCity>
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
                  <div
                    onClick={() => setDisplayColorPicker(false)}
                  />
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
                Create
              </button>
            </div>
          </form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

// const mapStateToProps = ({reminder}) =>{

// }

const mapDispatchToProps = dispatch => ({
  setReminder: reminder => dispatch(setReminder(reminder)),
  // setWeather: reminder => dispatch()
});

export default connect(null, mapDispatchToProps)(ReminderModal);
