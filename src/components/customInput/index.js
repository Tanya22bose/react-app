import React from "react";
import RenderInput from "../renderInput";
import './../../App.css'
/*
  renderInput : function to render input on the basis of input type, 
  it displays a label with an input

  accepts props:   
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

const CustomInput = (props) => {
  return (
    <div className="main-container">
      <label htmlFor="flexibleInput" style={props.labelStyle}>
        {props.inputTitle}
      </label>
      <RenderInput {...props} />
    </div>
  );
};

export default CustomInput;
