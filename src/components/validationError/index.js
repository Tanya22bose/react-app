const ShowValidationError = ({ hasError, errorMessage }) => {
  return hasError ? <div className="error-message">{errorMessage}</div> : "";
};

export default ShowValidationError;
