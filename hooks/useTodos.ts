"use client";

import { useEffect, useState } from "react";
import { loadFromStorage, saveToStorage } from "@/lib/storage";
import { completeTodo, createTodo } from "@/lib/todo-utils";
import type { AppState, TodoItem } from "@/types/todo";

export function useTodos() {
  const [state, setState] = useState<AppState>({
    todos: [],
    completedTodos: [],
  });

  const [isLoading, setIsLoading] = useState(true);

  // 初期化時にストレージからデータを読み込み
  useEffect(() => {
    const savedState = loadFromStorage();
    if (savedState) {
      setState(savedState);
    }
    setIsLoading(false);
  }, []);

  // 状態が変更されるたびにストレージに保存
  useEffect(() => {
    if (!isLoading) {
      saveToStorage(state);
    }
  }, [state, isLoading]);

  const addTodo = (content: string) => {
    const newTodo = createTodo(content);
    setState((prev) => ({
      ...prev,
      todos: [...prev.todos, newTodo],
    }));
  };

  const reorderTodos = (newTodos: TodoItem[]) => {
    setState((prev) => ({
      ...prev,
      todos: newTodos,
    }));
  };

  const markAsCompleted = (id: string) => {
    setState((prev) => {
      const todoIndex = prev.todos.findIndex((todo) => todo.id === id);
      if (todoIndex === -1) return prev;

      const todo = prev.todos[todoIndex];
      const completedTodo = completeTodo(todo);

      return {
        todos: prev.todos.filter((t) => t.id !== id),
        completedTodos: [...prev.completedTodos, completedTodo],
      };
    });
  };

  const clearCompletedTodos = () => {
    setState((prev) => ({
      ...prev,
      completedTodos: [],
    }));
  };

  return {
    todos: state.todos,
    completedTodos: state.completedTodos,
    isLoading,
    addTodo,
    reorderTodos,
    markAsCompleted,
    clearCompletedTodos,
  };
}
