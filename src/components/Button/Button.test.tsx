import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button";

it("should render children", () => {
  const text = "Btn text";
  render(<Button>{text}</Button>);

  expect(screen.getByText(text)).toBeInTheDocument();
});

it("should call click handler", () => {
  const clickMock = jest.fn();
  const text = "Click me";
  render(<Button onClick={clickMock}>{text}</Button>);

  // Click button
  fireEvent.click(screen.getByRole("button"));

  expect(clickMock).toHaveBeenCalled();
});
