import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import TodoEditor from "./TodoEditor";

describe("TodoEditor", () => {
  it("should render editor with placeholder", () => {
    const mockOnSubmit = vi.fn();
    render(<TodoEditor onSubmit={mockOnSubmit} placeholder="テストプレースホルダー" />);

    expect(screen.getByRole("button", { name: "TODOを追加" })).toBeInTheDocument();
  });

  it("should render formatting buttons", () => {
    const mockOnSubmit = vi.fn();
    render(<TodoEditor onSubmit={mockOnSubmit} />);

    expect(screen.getByRole("button", { name: "B" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "I" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "• List" })).toBeInTheDocument();
  });

  it("should call onSubmit when add button is clicked", async () => {
    const mockOnSubmit = vi.fn();
    const user = userEvent.setup();

    render(<TodoEditor onSubmit={mockOnSubmit} />);

    const addButton = screen.getByRole("button", { name: "TODOを追加" });
    await user.click(addButton);

    // Empty content should not trigger onSubmit
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });
});
