import { validateInput } from "./validate";

export const handleInputChange = (value, setInputValue) => {
  setInputValue(value);
};

export const onBlurSaveInput = (
  inputValue,
  inputType,
  required,
  minLength,
  maxLength,
  regexPattern,
  setError,
  setErrorMsg
) => {
  const error = validateInput(
    inputValue,
    inputType,
    required,
    minLength,
    maxLength,
    regexPattern
  );
  if (error?.length) {
    setError(true);
    setErrorMsg(error);
  } else {
    setError(false);
    setErrorMsg("");
  }
};
