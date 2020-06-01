import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

it("should call click handler", () => {
  const clickMock = jest.fn();
  const text = "Click me";
  const { getByText } = render(<Button onClick={clickMock}>{text}</Button>);

  // Click button
  fireEvent.click(getByText(text));

  expect(clickMock).toHaveBeenCalled();
});
