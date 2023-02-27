import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a component testing page", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /NEXT COMPONENT TESTING PAGE/,
    });

    expect(heading).toBeInTheDocument();
  });
});
