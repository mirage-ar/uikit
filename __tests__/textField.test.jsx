import { render, screen, cleanup } from "@testing-library/react";
import TextField from "../components/TextField";
import "@testing-library/jest-dom";
import { text } from "stream/consumers";

describe("Text Field", () => {
  it("renders an text field", () => {
    render(<TextField placeholder="test"/>);

    const textElement = screen.getByTestId("text-test");

    expect(textElement).toBeInTheDocument();
    
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument;
  });
});
