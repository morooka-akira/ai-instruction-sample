import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renders welcome message", () => {
    render(<Home />);
    expect(screen.getByText("Welcome to Next.js!")).toBeInTheDocument();
  });
});
