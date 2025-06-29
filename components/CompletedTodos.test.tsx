import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import type { TodoItem as TodoItemType } from "@/types/todo";
import CompletedTodos from "./CompletedTodos";

describe("CompletedTodos", () => {
  const mockCompletedTodos: TodoItemType[] = [
    {
      id: "1",
      content: "<p>完了したTODO 1</p>",
      completed: true,
      createdAt: new Date("2024-01-01"),
      completedAt: new Date("2024-01-02"),
      order: 0,
    },
    {
      id: "2",
      content: "<p>完了したTODO 2</p>",
      completed: true,
      createdAt: new Date("2024-01-01"),
      completedAt: new Date("2024-01-03"),
      order: 1,
    },
  ];

  it("should render completed todos count", () => {
    const mockOnBack = vi.fn();
    const mockOnClear = vi.fn();

    render(
      <CompletedTodos
        completedTodos={mockCompletedTodos}
        onBack={mockOnBack}
        onClear={mockOnClear}
      />,
    );

    expect(screen.getByText("完了済みTODO (2)")).toBeInTheDocument();
  });

  it("should render empty message when no completed todos", () => {
    const mockOnBack = vi.fn();
    const mockOnClear = vi.fn();

    render(<CompletedTodos completedTodos={[]} onBack={mockOnBack} onClear={mockOnClear} />);

    expect(screen.getByText("完了したTODOアイテムがありません。")).toBeInTheDocument();
  });

  it("should render completed todo items", () => {
    const mockOnBack = vi.fn();
    const mockOnClear = vi.fn();

    render(
      <CompletedTodos
        completedTodos={mockCompletedTodos}
        onBack={mockOnBack}
        onClear={mockOnClear}
      />,
    );

    expect(screen.getByText("完了したTODO 1")).toBeInTheDocument();
    expect(screen.getByText("完了したTODO 2")).toBeInTheDocument();
  });

  it("should call onBack when back button is clicked", async () => {
    const mockOnBack = vi.fn();
    const mockOnClear = vi.fn();
    const user = userEvent.setup();

    render(
      <CompletedTodos
        completedTodos={mockCompletedTodos}
        onBack={mockOnBack}
        onClear={mockOnClear}
      />,
    );

    const backButton = screen.getByRole("button", { name: "戻る" });
    await user.click(backButton);

    expect(mockOnBack).toHaveBeenCalled();
  });

  it("should call onClear when clear button is clicked", async () => {
    const mockOnBack = vi.fn();
    const mockOnClear = vi.fn();
    const user = userEvent.setup();

    render(
      <CompletedTodos
        completedTodos={mockCompletedTodos}
        onBack={mockOnBack}
        onClear={mockOnClear}
      />,
    );

    const clearButton = screen.getByRole("button", { name: "すべてクリア" });
    await user.click(clearButton);

    expect(mockOnClear).toHaveBeenCalled();
  });

  it("should not show clear button when no completed todos", () => {
    const mockOnBack = vi.fn();
    const mockOnClear = vi.fn();

    render(<CompletedTodos completedTodos={[]} onBack={mockOnBack} onClear={mockOnClear} />);

    expect(screen.queryByRole("button", { name: "すべてクリア" })).not.toBeInTheDocument();
  });
});
