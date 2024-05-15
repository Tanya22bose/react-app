import React from "react";
import "./App.css";
import { radioButtonOptions, selectOptions } from "./utils/constants";
import { handleInputChange, onBlurSaveInput } from "./utils/helper";
import CustomInput from "./components/customInput/index";

/*
   App : renders input type - text, number, selectDropdown, password, currency, radio, checkbox using :

   CustomInput component which accepts props: 
   inputStyle - for custom input styles,
   inputTitle - for label text, 
   inputType - for input type,
   labelStyle - for custom label style,
   holder - for placeholder text,
   required - boolean indicating whether its required,
   disable - boolean indicating whether its disabled, 
   minLength - minimum length for a text or minimum value in case of number, 
   maxLength - maximum length for a text or maximum value in case of number, 
   inputValue - for input value
   customOnChange - for input on change handler, 
   customOnBlur - for input on blur event, 
   regexPattern - regex pattern to match against,
   options - array of options for input type select, radio and checkbox,
   optionStyle - custom style for options,

*/

const inputStyle = {
  width: "200px",
  height: "40px",
  padding: "8px",
  fontSize: "16px",
  borderRadius: "4px",
  boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)",
  boxSizing: "border-box",
  outline: "none",
};

const labelStyle = {
  display: "block",
  marginBottom: "12px",
  fontSize: "14px",
  color: "#333",
};

const optionStyle = {
  padding: "8px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  width: "210px",
  backgroundColor: "#fff",
  color: "#333",
  cursor: "pointer",
  outline: "none",
};

function App() {
  return (
    <>
      {/* Text Input Example */}
      <CustomInput
        inputStyle={inputStyle}
        inputTitle="Text Input"
        inputType="text"
        labelStyle={labelStyle}
        holder="Enter text..."
        required={true}
        disable={false}
        minLength={3}
        maxLength={10}
        inputValue={"hey there!"}
        customOnChange={handleInputChange}
        customOnBlur={onBlurSaveInput}
      />
      {/* Number Input Example */}
      <CustomInput
        inputStyle={inputStyle}
        inputTitle="Number Input"
        inputType="number"
        labelStyle={labelStyle}
        holder="Enter number..."
        required={true}
        disable={false}
        minLength={3}
        maxLength={10}
        inputValue={10}
        customOnChange={handleInputChange}
        customOnBlur={onBlurSaveInput}
      />
      {/* Select Input Example*/}
      <CustomInput
        inputTitle="Select Input"
        inputType="select"
        labelStyle={labelStyle}
        options={selectOptions}
        optionStyle={optionStyle}
        required={true}
        customOnChange={handleInputChange}
        customOnBlur={onBlurSaveInput}
      />
      {/* Radio Input Example */}
      <CustomInput
        optionStyle={{ display: "flex", flexDirection: "column" }}
        inputTitle="Radio Input"
        inputType="radio"
        labelStyle={labelStyle}
        options={radioButtonOptions}
        customOnChange={handleInputChange}
        customOnBlur={onBlurSaveInput}
      />
      {/* Checkbox Input Example */}
      <CustomInput
        optionStyle={{ display: "flex", flexDirection: "column" }}
        inputTitle="Checkbox Input"
        inputType="checkbox"
        labelStyle={labelStyle}
        options={radioButtonOptions}
        customOnChange={handleInputChange}
        customOnBlur={onBlurSaveInput}
      />
      {/* Password Input Example */}
      <CustomInput
        inputStyle={inputStyle}
        inputTitle="Password Input"
        inputType="password"
        holder="Enter password..."
        labelStyle={labelStyle}
        required={true}
        minLength={8}
        maxLength={128}
        regexPattern={/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/}
        customOnChange={handleInputChange}
        customOnBlur={onBlurSaveInput}
      />
      {/* Currency Input Example */}
      <CustomInput
        inputStyle={inputStyle}
        inputTitle="Currency Input"
        inputType="number"
        holder="0.00"
        minLength={1}
        maxLength={9999999999999.99}
        labelStyle={labelStyle}
        regexPattern={/^\d+(\.\d{1,2})?$/}
        inputValue={10.5}
        disable={true}
        customOnChange={handleInputChange}
        customOnBlur={onBlurSaveInput}
      />
    </>
  );
}

export default App;
