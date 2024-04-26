import { useState } from "react";
import "./App.css";
import CustomInput from "./components/customInput";

function App() {
  const [inputValue, setInputValue] = useState('hey there');
  const [isDisable, setDisability] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const [error, setError] = useState(false);
  const [minLength, setMinLength] = useState(3);
  const [maxLength, setMaxLength] = useState(16);

  //set the new value entered by the user 
  const setNewInput = (newInput) => {
    setInputValue(newInput);
  };

  //validate input for different types of inputs
  const validateInput = (value) => {
    if (value.length < minLength || value.length > maxLength) {
      setErrorMessage(
        `value can not be less than ${minLength} and greater than ${maxLength}`
      );
      setError(true);
    }
  };

  
  return (
    <div className="App">
      {/* input type text */}
      <CustomInput
        inputStyle={{ marginTop: "10px", height: "30px", padding: "10px" }}
        inputTitle="Enter title text"
        required={true}
        disable={isDisable}
        customChangeFunction={setInputValue}
        inputType="text"
        holder="please type your input.."
        labelStyle={{ marginTop: "50px" }}
        errorMessage={errorMessage}
        error={error}
        maxLength={maxLength}
        minLength={minLength}
        inputValue={inputValue}
      />
      {/* input type number */}
      <CustomInput
        inputStyle={{ marginTop: "10px", height: "30px", padding: "10px" }}
        inputTitle="Input Number"
        required={false}
        disable={false}
        customChangeFunction={setInputValue}
        inputType="number"
        holder="please type your input.."
        labelStyle={{ marginTop: "50px" }}
        errorMessage={errorMessage}
        error={error}
        maxLength={maxLength}
        minLength={minLength}
        inputValue={inputValue}
      />
      {/* input type select */}
      <CustomInput
        inputStyle={{ marginTop: "10px", height: "30px", padding: "10px" }}
        inputTitle="Select Dropdown"
        required={false}
        disable={!isDisable}
        customChangeFunction={setInputValue}
        inputType={"select"}
        holder="please type your input.."
        labelStyle={{ marginTop: "50px" }}
        errorMessage={errorMessage}
        error={error}
        options={[
          { label: "option1", value: "option1" },
          { label: "option2", value: "option2" },
        ]}
        maxLength={maxLength}
        minLength={minLength}
        inputValue={inputValue}
      />
      {/* input type password */}
      <CustomInput
        inputStyle={{ marginTop: "10px", height: "30px", padding: "10px" }}
        inputTitle="Custom Password"
        required={false}
        disable={isDisable}
        customChangeFunction={setInputValue}
        inputType="password"
        holder="please type your input.."
        labelStyle={{ marginTop: "50px" }}
        errorMessage={errorMessage}
        error={error}
        maxLength={maxLength}
        minLength={minLength}
        inputValue={inputValue}
      />
      {/* input type currency */}
      <CustomInput
        inputStyle={{ marginTop: "10px", height: "30px", padding: "10px" }}
        inputTitle="Currency Input"
        required={false}
        disable={isDisable}
        customChangeFunction={setInputValue}
        inputType="currency"
        holder="please type your input.."
        labelStyle={{ marginTop: "50px" }}
        errorMessage={errorMessage}
        error={error}
        maxLength={maxLength}
        minLength={minLength}
        inputValue={inputValue}
      />
    </div>
  );
}

export default App;
