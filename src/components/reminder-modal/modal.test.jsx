import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ModalUI from "./modalUI.component";
import { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

const simulateChangeOnInput = (wrapper, inputSelector, newValue) => {
  const input = wrapper.find(inputSelector);
  input.simulate("change", {
    target: { value: newValue }
  });

  return wrapper.find(inputSelector);
};

describe("<ModalUI />", () => {
  const setReminder = jest.fn();
  const setWeather = jest.fn();
  const updateReminder = jest.fn();
  const removeReminder = jest.fn();
  const setOpen = jest.fn();
  let wrapper;

  beforeEach(() => {
    const mockProps = {
      setOpen: setOpen,
      isOpen: true,
      setReminder: setReminder,
      setWeather: setWeather,
      updateReminder: updateReminder,
      removeReminder: removeReminder,
      weather: {},
      data: {},
      edit: false
    };

    wrapper = shallow(<ModalUI {...mockProps}></ModalUI>);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("calling the onSubmit function", async () => {

    simulateChangeOnInput(wrapper, "#title-input", "Testing");
    simulateChangeOnInput(wrapper, "#date-input", "10/20/2020");
    simulateChangeOnInput(wrapper, "#time-input", "10:30");

    const submitBtn = wrapper.find('button[type="submit"]')
    submitBtn.simulate('click',{
        preventDefault: () => {}
    });
    expect(setReminder).toHaveBeenCalled();

  });
});
