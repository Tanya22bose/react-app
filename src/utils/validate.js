import { validationMessages } from "./constants";

export const validateInput = (
  value,
  inputType,
  required = false,
  minLength = null,
  maxLength = null,
  regexPattern = null
) => {
  if (isRequiredFieldError(value, required))
    return validationMessages.REQUIRED_MESSAGE;
  if (inputType === "text" || inputType === "password")
    return validateTextOrPassword(value, minLength, maxLength, regexPattern);
  if (inputType === "number")
    return validateNumber(value, minLength, maxLength);
};

const validateNumber = (value, minValue, maxValue) => {
  if (isNaN(value)) return validationMessages.NOT_A_NUMBER;
  if (validateInputLength(parseFloat(value), minValue, maxValue))
    return `Number should not be less than ${minValue} or greater than ${maxValue}`;
};

const validateTextOrPassword = (value, minLength, maxLength, regexPattern) => {
  if (validateInputLength(value.length, minLength, maxLength))
    return `It should not be less than ${minLength} characters or greater than ${maxLength} characters`;
  if (regexPattern && !regexPattern.test(value))
    return validationMessages.INVALID_INPUT;
};

//common functions
const isRequiredFieldError = (value, required) => {
  return required && value.trim() === "";
};

const validateInputLength = (length, minLength, maxLength) => {
  return length < minLength || length > maxLength;
};
