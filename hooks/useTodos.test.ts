import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useTodos } from "./useTodos";

// Mock storage functions
vi.mock("@/lib/storage", () => ({
  loadFromStorage: vi.fn(() => null),
  saveToStorage: vi.fn(),
}));

// Mock localStorage
const mockLocalStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
};
Object.defineProperty(window, "localStorage", {
  value: mockLocalStorage,
});

describe("useTodos", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should initialize with empty state", () => {
    const { result } = renderHook(() => useTodos());

    expect(result.current.todos).toEqual([]);
    expect(result.current.completedTodos).toEqual([]);
    expect(result.current.isLoading).toBe(false);
  });

  it("should add a new todo", () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo("<p>新しいTODO</p>");
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].content).toBe("<p>新しいTODO</p>");
    expect(result.current.todos[0].completed).toBe(false);
  });

  it("should mark todo as completed", () => {
    const { result } = renderHook(() => useTodos());

    // まずTODOを追加
    act(() => {
      result.current.addTodo("<p>テストTODO</p>");
    });

    const todoId = result.current.todos[0].id;

    // 完了マーク
    act(() => {
      result.current.markAsCompleted(todoId);
    });

    expect(result.current.todos).toHaveLength(0);
    expect(result.current.completedTodos).toHaveLength(1);
    expect(result.current.completedTodos[0].completed).toBe(true);
    expect(result.current.completedTodos[0].completedAt).toBeDefined();
  });

  it("should reorder todos", () => {
    const { result } = renderHook(() => useTodos());

    // 複数のTODOを追加
    act(() => {
      result.current.addTodo("<p>TODO 1</p>");
      result.current.addTodo("<p>TODO 2</p>");
    });

    const [todo1, todo2] = result.current.todos;
    const reorderedTodos = [todo2, todo1];

    act(() => {
      result.current.reorderTodos(reorderedTodos);
    });

    expect(result.current.todos[0].content).toBe("<p>TODO 2</p>");
    expect(result.current.todos[1].content).toBe("<p>TODO 1</p>");
  });

  it("should clear completed todos", () => {
    const { result } = renderHook(() => useTodos());

    // TODOを追加して完了させる
    act(() => {
      result.current.addTodo("<p>テストTODO</p>");
    });

    const todoId = result.current.todos[0].id;

    act(() => {
      result.current.markAsCompleted(todoId);
    });

    expect(result.current.completedTodos).toHaveLength(1);

    // 完了済みTODOをクリア
    act(() => {
      result.current.clearCompletedTodos();
    });

    expect(result.current.completedTodos).toHaveLength(0);
  });
});
