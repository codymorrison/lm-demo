import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Accordion from "./index";

describe("Accordion Component", () => {
  const title = "Accordion Title";
  const children = <div>Accordion Content</div>;

  test("renders with title and children", () => {
    render(<Accordion title={title}>{children}</Accordion>);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test("does not render children initially", () => {
    render(<Accordion title={title}>{children}</Accordion>);
    expect(screen.queryByText("Accordion Content")).not.toBeInTheDocument();
  });

  test("renders children when opened", () => {
    render(<Accordion title={title}>{children}</Accordion>);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText("Accordion Content")).toBeInTheDocument();
  });
});
