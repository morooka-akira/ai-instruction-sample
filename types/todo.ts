export interface TodoItem {
  id: string;
  content: string;
  completed: boolean;
  createdAt: Date;
  completedAt?: Date;
  order: number;
}

export interface AppState {
  todos: TodoItem[];
  completedTodos: TodoItem[];
}
