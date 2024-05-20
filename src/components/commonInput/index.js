import { useState } from "react";
import ShowValidationError from "../validationError";
import "./../../App.css";
import { currencies } from "./../../utils/constants";
import { SelectOption } from "../selectDropdownInput";

/*
  CommonInput : 
    purpose: displays input for type password, text, currency and number along with validation messages.
    props: type, required, minlength, maxlength, regexp, placeholder, style, value, title, disabled, custom function for onchange and onblur
  ShowValidationError: 
    purpose: to display errors
    props: error, errorMessage
  RenderCurrencyAnnnotation: 
    purpose: displays currency annotaitions for different currencies.
    props: is currency, disabled
 */

const CommonInput = (props) => {
  const {
    inputTitle,
    inputValue,
    inputType,
    inputStyle,
    holder,
    customOnChange,
    customOnBlur,
    required,
    minLength,
    maxLength,
    regexPattern,
    disable,
  } = props;
  const [hasError, setError] = useState(false);
  const [errorMessage, setErrorMsg] = useState("");
  const [commonInputValue, setInputValue] = useState(inputValue);

  return (
    <>
      <div>
        <RenderCurrencyAnnnotation
          isCurrency={inputTitle === "Currency Input"}
          disabled={disable}
        />
        <input
          type={inputType}
          style={inputStyle}
          className={hasError ? "warning" : "success"}
          placeholder={holder}
          value={commonInputValue}
          onChange={(e) => customOnChange(e.target.value, setInputValue)}
          onBlur={(e) => {
            customOnBlur(
              e.target.value,
              inputType,
              required,
              minLength,
              maxLength,
              regexPattern,
              setError,
              setErrorMsg
            );
          }}
          disabled={disable}
        />
      </div>
      <ShowValidationError hasError={hasError} errorMessage={errorMessage} />
    </>
  );
};

const RenderCurrencyAnnnotation = ({ isCurrency, disabled }) => {
  if (isCurrency)
    return (
      <select className="currency-dropdown-style" disabled={disabled}>
        {currencies?.map((option, idx) => (
          <SelectOption value={option} label={option} key={idx} />
        ))}
      </select>
    );
};

export default CommonInput;
