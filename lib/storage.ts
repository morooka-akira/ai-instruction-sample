import type { AppState } from "@/types/todo";

interface SerializedTodoItem {
  id: string;
  content: string;
  completed: boolean;
  createdAt: string;
  completedAt?: string;
  order: number;
}

const STORAGE_KEY = "todo-app-state";

export function saveToStorage(state: AppState): void {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serializedState);
  } catch (error) {
    console.error("Failed to save to localStorage:", error);
  }
}

export function loadFromStorage(): AppState | null {
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    if (serializedState === null) {
      return null;
    }

    const state = JSON.parse(serializedState);

    return {
      todos:
        state.todos?.map((todo: SerializedTodoItem) => ({
          ...todo,
          createdAt: new Date(todo.createdAt),
          completedAt: todo.completedAt ? new Date(todo.completedAt) : undefined,
        })) || [],
      completedTodos:
        state.completedTodos?.map((todo: SerializedTodoItem) => ({
          ...todo,
          createdAt: new Date(todo.createdAt),
          completedAt: todo.completedAt ? new Date(todo.completedAt) : undefined,
        })) || [],
    };
  } catch (error) {
    console.error("Failed to load from localStorage:", error);
    return null;
  }
}

export function clearStorage(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Failed to clear localStorage:", error);
  }
}
