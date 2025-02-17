import { render } from "@testing-library/react-native";
import Home from "../app/index";

describe("Home Screen", () => {
  it("renders the main screen correctly", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Home Buddy")).toBeTruthy();
    expect(getByText("Scientific Thinking")).toBeTruthy();
    expect(getByText("Class Memories")).toBeTruthy();
    expect(getByText("Explore")).toBeTruthy();
    expect(getByText("Content")).toBeTruthy();
  });
});
