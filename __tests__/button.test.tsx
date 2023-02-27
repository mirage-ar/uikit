import { render, screen, cleanup } from "@testing-library/react";
import Button from "../components/Button";
import "@testing-library/jest-dom";

describe("Button", () => {
    it("renders a button", () => {
      render(<Button children="test"/>);
  
      const buttonElement = screen.getByTestId("button-test");
  
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveTextContent("test");
    });
  });

  describe("Button", () => {
    it("renders a secondary button", () => {
      render(<Button children="test" secondary/>);
  
      const buttonElement = screen.getByTestId("button-test");
  
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveTextContent("test");
      expect(buttonElement.getAttribute('class')).toMatch(/secondary/gi)
    });
  });

describe("Button", () => {
  it("renders a small button", () => {
    render(<Button children="test" small/>);

    const buttonElement = screen.getByTestId("button-test");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("test");
    expect(buttonElement.getAttribute('class')).toMatch(/small/gi)
  });
});

describe("Button", () => {
    it("renders a disabled button", () => {
      render(<Button children="test" disabled/>);
  
      const buttonElement = screen.getByTestId("button-test");
  
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveTextContent("test");
      expect(buttonElement.getAttribute('class')).toMatch(/disabled/gi)
    });
  });

  describe("Button", () => {
    it("renders a loading button", () => {
      render(<Button children="test" loading/>);
  
      const buttonElement = screen.getByTestId("button-test");
  
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveTextContent("");
      expect(buttonElement.getAttribute('class')).toMatch(/loading/gi)
    });
  });

  describe("Button", () => {
    it("renders a button with an icon", () => {
      render(<Button children="test" icon="metamask"/>);
  
      const buttonElement = screen.getByTestId("button-test");
  
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveTextContent("test");
      expect(buttonElement.getAttribute('class')).toMatch(/icon/gi)
      
      const icon = screen.getByRole('img');

      expect(icon).toHaveAttribute('src', '/icons/metamask.svg')
    });
  });