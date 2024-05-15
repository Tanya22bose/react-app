import React, { useEffect, useState } from "react";

const RadioCheckboxInput = (props) => {
  const [radioButtonInput, setRadioButtonInput] = useState(props.options);
  const [selectedValue, setSelectedValue] = useState({});

  useEffect(() => {
    setRadioButtonInput((value) =>
      value.map((option) => ({
        ...option,
        value:
          option.label === selectedValue.label ? !option.value : option.value,
      }))
    );
  }, [setRadioButtonInput, selectedValue]);

  return (
    <div style={props.optionStyle}>
      {radioButtonInput?.map((option) => (
        <Option
          option={option}
          setSelectedValue={setSelectedValue}
          selectedValue={selectedValue}
          {...props}
        />
      ))}
    </div>
  );
};

const Option = ({
  inputType,
  disable,
  selectedValue,
  customOnChange,
  setSelectedValue,
  option,
}) => {
  return (
    <label key={option?.label}>
      <input
        type={inputType}
        disabled={disable}
        name={option?.label}
        checked={
          selectedValue?.length
            ? selectedValue?.label === option?.label
            : option?.value
        }
        onChange={() => {
          customOnChange(
            { label: option?.label, value: !option?.value },
            setSelectedValue
          );
        }}
      />
      {option?.label}
    </label>
  );
};

export default RadioCheckboxInput;
