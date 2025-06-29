import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import TodoPage from "./page";

// Mock the useTodos hook
vi.mock("@/hooks/useTodos", () => ({
  useTodos: () => ({
    todos: [
      {
        id: "1",
        content: "<p>テストTODO</p>",
        completed: false,
        createdAt: new Date(),
        order: 0,
      },
    ],
    completedTodos: [
      {
        id: "2",
        content: "<p>完了したTODO</p>",
        completed: true,
        createdAt: new Date(),
        completedAt: new Date(),
        order: 0,
      },
    ],
    isLoading: false,
    addTodo: vi.fn(),
    reorderTodos: vi.fn(),
    markAsCompleted: vi.fn(),
    clearCompletedTodos: vi.fn(),
  }),
}));

// Mock all the child components
vi.mock("@/components/TodoEditor", () => ({
  default: () => <div data-testid="todo-editor">Todo Editor</div>,
}));

vi.mock("@/components/TodoList", () => ({
  default: ({ todos }: { todos: any[] }) => (
    <div data-testid="todo-list">Todo List ({todos.length} items)</div>
  ),
}));

vi.mock("@/components/CompletedTodos", () => ({
  default: ({ completedTodos, onBack }: { completedTodos: any[]; onBack: () => void }) => (
    <div data-testid="completed-todos">
      Completed Todos ({completedTodos.length} items)
      <button type="button" onClick={onBack}>
        戻る
      </button>
    </div>
  ),
}));

describe("TodoPage", () => {
  it("should render main todo interface", () => {
    render(<TodoPage />);

    expect(screen.getByTestId("todo-editor")).toBeInTheDocument();
    expect(screen.getByTestId("todo-list")).toBeInTheDocument();
    expect(screen.getByText("アクティブなTODO (1)")).toBeInTheDocument();
  });

  it("should show completed todos button when there are completed items", () => {
    render(<TodoPage />);

    expect(screen.getByRole("button", { name: "完了済み (1)" })).toBeInTheDocument();
  });

  it("should switch to completed todos view when completed button is clicked", async () => {
    const user = userEvent.setup();
    render(<TodoPage />);

    const completedButton = screen.getByRole("button", { name: "完了済み (1)" });
    await user.click(completedButton);

    expect(screen.getByTestId("completed-todos")).toBeInTheDocument();
    expect(screen.queryByTestId("todo-editor")).not.toBeInTheDocument();
  });
});
