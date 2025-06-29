import { v4 as uuidv4 } from "uuid";
import type { TodoItem } from "@/types/todo";

export function createTodo(content: string): TodoItem {
  return {
    id: uuidv4(),
    content,
    completed: false,
    createdAt: new Date(),
    order: Date.now(),
  };
}

export function completeTodo(todo: TodoItem): TodoItem {
  return {
    ...todo,
    completed: true,
    completedAt: new Date(),
  };
}

export function reorderTodos(todos: TodoItem[], startIndex: number, endIndex: number): TodoItem[] {
  const result = Array.from(todos);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result.map((todo, index) => ({
    ...todo,
    order: index,
  }));
}
