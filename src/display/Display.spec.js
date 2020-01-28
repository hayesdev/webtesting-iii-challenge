// Test away!
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Display from "./Display";

test("displays locked if lock button is clicked, unlocked if unlock button clicked ", () => {
  /// AAA

  // Arrange
  const { getByText } = render(<Display />);

  const lockButton = getByText("Locked");

  fireEvent.click(lockButton);
});
