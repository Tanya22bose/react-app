import { fireEvent, render, screen } from "@testing-library/react";
import CustomInput from "./components/customInput";
import { handleInputChange } from "./utils/helper";
describe("input", () => {
  test("renders input element with correct title and style", () => {
    render(
      <CustomInput
        inputStyle={{ marginTop: "10px", height: "30px", padding: "10px" }}
        inputTitle="Enter title text"
        required={true}
      />
    );

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveStyle({
      marginTop: "10px",
      height: "30px",
      padding: "10px",
    });
    expect(screen.getByText("Enter title text")).toBeInTheDocument();
  });
  test("handles input change correctly", () => {
    render(
      <CustomInput
        inputStyle={{ marginTop: "10px", height: "30px", padding: "10px" }}
        inputTitle="Enter title text"
        required={true}
        customOnChange={handleInputChange}
      />
    );

    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "New Value" } });

    expect(inputElement.value).toBe("New Value");
  });
});
