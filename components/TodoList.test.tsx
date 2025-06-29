import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { TodoItem as TodoItemType } from "@/types/todo";
import TodoList from "./TodoList";

// Mock @dnd-kit components
vi.mock("@dnd-kit/core", () => ({
  DndContext: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  closestCenter: vi.fn(),
  KeyboardSensor: vi.fn(),
  PointerSensor: vi.fn(),
  useSensor: vi.fn(),
  useSensors: vi.fn(() => []),
}));

vi.mock("@dnd-kit/sortable", () => ({
  arrayMove: vi.fn(),
  SortableContext: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  sortableKeyboardCoordinates: vi.fn(),
  verticalListSortingStrategy: vi.fn(),
  useSortable: () => ({
    attributes: {},
    listeners: {},
    setNodeRef: vi.fn(),
    transform: null,
    transition: null,
    isDragging: false,
  }),
}));

vi.mock("@dnd-kit/utilities", () => ({
  CSS: {
    Transform: {
      toString: () => "",
    },
  },
}));

describe("TodoList", () => {
  const mockTodos: TodoItemType[] = [
    {
      id: "1",
      content: "<p>最初のTODO</p>",
      completed: false,
      createdAt: new Date(),
      order: 0,
    },
    {
      id: "2",
      content: "<p>2番目のTODO</p>",
      completed: false,
      createdAt: new Date(),
      order: 1,
    },
  ];

  it("should render empty message when no todos", () => {
    const mockOnReorder = vi.fn();
    const mockOnComplete = vi.fn();

    render(<TodoList todos={[]} onReorder={mockOnReorder} onComplete={mockOnComplete} />);

    expect(
      screen.getByText("TODOアイテムがありません。上のエディタから追加してください。"),
    ).toBeInTheDocument();
  });

  it("should render todo items when todos exist", () => {
    const mockOnReorder = vi.fn();
    const mockOnComplete = vi.fn();

    render(<TodoList todos={mockTodos} onReorder={mockOnReorder} onComplete={mockOnComplete} />);

    expect(screen.getByText("最初のTODO")).toBeInTheDocument();
    expect(screen.getByText("2番目のTODO")).toBeInTheDocument();
  });
});
