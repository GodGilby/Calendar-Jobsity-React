import React from "react";

//Redux
import { connect } from "react-redux";
import {
  setReminder,
  setWeather,
  updateReminder,
  removeReminder
} from "../../redux/actions/reminderAction";

//Components
import ModalUI from "./modalUI.component";

export const ReminderModal = (props) => {

  return(
    <ModalUI {...props} ></ModalUI>
  )
};

const mapStateToProps = ({ Reminder }) => ({
  weather: Reminder.weather
});

const mapDispatchToProps = dispatch => ({
  setReminder: reminder => dispatch(setReminder(reminder)),
  setWeather: reminder => dispatch(setWeather(reminder.city)),
  updateReminder: reminder => dispatch(updateReminder(reminder)),
  removeReminder: reminder => dispatch(removeReminder(reminder.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReminderModal);
