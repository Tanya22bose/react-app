const CustomInput = ({
  inputStyle,
  inputTitle,
  required,
  disable,
  customChangeFunction,
  inputType,
  holder,
  labelStyle,
  errorMessage,
  error,
  maxLength,
  minLength,
  inputValue,
  options,
}) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <label for="customInput" style={labelStyle}>
        {inputTitle}
      </label>
      {inputType === "select" ? (
        <select defaultValue={inputValue} name="customInput">
          {options?.map((item, idx) => (
            <option
              key={item.label}
              style={inputStyle}
              required={required}
              name="customInput"
              placeholder={holder}
              type={inputType}
              disabled={disable}
              onChange={customChangeFunction}
              maxLength={maxLength}
              minLength={minLength}
              defaultValue={inputValue}
            >
              {item.value}
            </option>
          ))}
        </select>
      ) : (
        <input
          style={inputStyle}
          required={required}
          name="customInput"
          placeholder={holder}
          type={inputType}
          disabled={disable}
          onChange={(e) => {
            customChangeFunction(e?.target?.value);
          }}
          maxLength={maxLength}
          minLength={minLength}
          defaultValue={inputValue}
        ></input>
      )}
      {required && error & errorMessage ? <div>{errorMessage}</div> : ""}
    </div>
  );
};

export default CustomInput;
