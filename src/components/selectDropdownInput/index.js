import { useState } from "react";
import ShowValidationError from "../validationError";

export const SelectOption = ({ value, label, optionStyle = null }) => (
  <option key={value} value={value} style={optionStyle}>
    {label}
  </option>
);

const SelectDropdownInput = (props) => {
  const {
    optionStyle,
    options,
    disable,
    customOnBlur,
    customOnChange,
    inputType,
    required,
  } = props;
  const [commonInputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMsg] = useState("");
  const [hasError, setError] = useState(false);

  return (
    <>
      <div
        className={hasError ? "warning" : "success"}
        style={{ borderRadius: "5px" }}
      >
        <select
          style={optionStyle}
          className={hasError ? "warning" : "success"}
          disabled={disable}
          value={commonInputValue}
          onChange={(e) => customOnChange(e.target.value, setInputValue)}
          onBlur={(e) =>
            customOnBlur(
              e.target.value,
              inputType,
              required,
              null,
              null,
              null,
              setError,
              setErrorMsg
            )
          }
        >
          {options?.map((option) => (
            <SelectOption
              value={option?.value}
              label={option?.label}
              optionStyle={optionStyle}
            />
          ))}
        </select>
      </div>
      <ShowValidationError hasError={hasError} errorMessage={errorMessage} />
    </>
  );
};

export default SelectDropdownInput;
