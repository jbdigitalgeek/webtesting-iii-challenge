import React from "react";
import ReactDOM from "react-dom";
import Controls from "./Controls";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

describe("lock button", () => {
  it("should not work while gate is open", () => {
    const toggleLocked = jest.fn();
    const { getByText } = render(
      <Controls toggleLocked={toggleLocked} closed={false} locked={false} />
    );
    const button = getByText(/lock gate/i);
    fireEvent.click(button);
    expect(toggleLocked).toBeCalledTimes(0);
  });
  it("changes text to unlocked when gate unlocked", () => {
    const toggleLocked = jest.fn();
    const { getByText } = render(
      <Controls closed={true} locked={false} toggleLocked={toggleLocked} />
    );
    const button = getByText(/lock gate/i);
    fireEvent.click(button);
    expect(toggleLocked).toBeCalledTimes(1);
  });
});
