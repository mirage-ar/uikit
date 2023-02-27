import { render, screen, cleanup } from "@testing-library/react";
import Description from "../components/Description";
import "@testing-library/jest-dom";

describe("Description", () => {
  it("renders a description component", () => {
    render(<Description title="test" content="test"/>);

    const descriptionElement = screen.getByTestId("description-test");

    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent("TESTTEST")
  });
});
