import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
  it("renders welcome message", () => {
    render(<Home />);
    expect(screen.getByText("Welcome to Next.js!")).toBeInTheDocument();
  });
});
