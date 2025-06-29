import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import type { TodoItem as TodoItemType } from "@/types/todo";
import TodoItem from "./TodoItem";

// Mock @dnd-kit/sortable
vi.mock("@dnd-kit/sortable", () => ({
  useSortable: () => ({
    attributes: {},
    listeners: {},
    setNodeRef: vi.fn(),
    transform: null,
    transition: null,
    isDragging: false,
  }),
}));

// Mock @dnd-kit/utilities
vi.mock("@dnd-kit/utilities", () => ({
  CSS: {
    Transform: {
      toString: () => "",
    },
  },
}));

describe("TodoItem", () => {
  const mockTodo: TodoItemType = {
    id: "1",
    content: "<p>テストTODO</p>",
    completed: false,
    createdAt: new Date(),
    order: 0,
  };

  it("should render todo content", () => {
    const mockOnComplete = vi.fn();
    render(<TodoItem todo={mockTodo} onComplete={mockOnComplete} />);

    expect(screen.getByText("テストTODO")).toBeInTheDocument();
  });

  it("should render drag handle and complete button", () => {
    const mockOnComplete = vi.fn();
    render(<TodoItem todo={mockTodo} onComplete={mockOnComplete} />);

    expect(screen.getByRole("button", { name: "ドラッグして並び替え" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "TODOを完了" })).toBeInTheDocument();
  });

  it("should call onComplete when complete button is clicked", async () => {
    const mockOnComplete = vi.fn();
    const user = userEvent.setup();

    render(<TodoItem todo={mockTodo} onComplete={mockOnComplete} />);

    const completeButton = screen.getByRole("button", { name: "TODOを完了" });
    await user.click(completeButton);

    expect(mockOnComplete).toHaveBeenCalledWith("1");
  });
});
