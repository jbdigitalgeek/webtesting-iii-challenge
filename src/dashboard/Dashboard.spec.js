import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./Dashboard";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

describe("<Dashboard />", () => {
  it("renders", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Dashboard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
    it("renders without errors", () => {
        const queries = render(<Dashboard />);
    });
});
