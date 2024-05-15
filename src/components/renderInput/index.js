import CommonInput from "../commonInput";
import RadioCheckboxInput from "../radioCheckboxInput";
import SelectDropdownInput from "../selectDropdownInput";

/*
   renderInput : renders different inputs based on input type. e.g. checkbox, radio, select and text
   for different input types, we have created custom components, to add various validations based on the input type
*/

const RenderInput = (props) => {
  const { inputType } = props;
  if (inputType === "select") return <SelectDropdownInput {...props} />;
  if (inputType === "radio" || inputType === "checkbox")
    return <RadioCheckboxInput {...props} />;
  return <CommonInput {...props} />;
};

export default RenderInput;
