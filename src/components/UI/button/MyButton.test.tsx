import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MyButton from "./MyButton";
import pretty from "pretty";

describe("MyButton", () => {
  it("renders the button with text", () => {
    const { getByText } = render(<MyButton>Click me</MyButton>);
    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("applies additional class name", () => {
    const { container } = render(
      <MyButton styles="custom-class">Click me</MyButton>
    );
    expect(container.firstChild).toHaveClass("custom-class");

    console.log(pretty(container.innerHTML, { ocd: true }));
  });

  it("handles onClick event", () => {
    const onClick = jest.fn(); // Create a mock function
    const { getByText } = render(
      <MyButton onClick={onClick}>Click me</MyButton>
    );

    fireEvent.click(getByText("Click me"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
