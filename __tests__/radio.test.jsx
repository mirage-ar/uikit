import { render, screen, cleanup } from "@testing-library/react";
import Radio from "../components/Radio";
import "@testing-library/jest-dom";

describe("Radio", () => {
  it("renders an radio selector", () => {
    render(<Radio title="test" values={["one"]} />);

    const radioElement = screen.getByTestId("radio-test");

    expect(radioElement).toBeInTheDocument();
    expect(radioElement).toHaveTextContent("TESTONE");

    const radio = screen.getByRole("radio")
    expect(radio).toBeInTheDocument();
  });
});
