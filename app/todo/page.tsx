"use client";

import { CheckSquare } from "lucide-react";
import { useState } from "react";
import CompletedTodos from "@/components/CompletedTodos";
import TodoEditor from "@/components/TodoEditor";
import TodoList from "@/components/TodoList";
import { useTodos } from "@/hooks/useTodos";

export default function TodoPage() {
  const {
    todos,
    completedTodos,
    isLoading,
    addTodo,
    reorderTodos,
    markAsCompleted,
    clearCompletedTodos,
  } = useTodos();

  const [showCompleted, setShowCompleted] = useState(false);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-gray-500">読み込み中...</div>
      </div>
    );
  }

  if (showCompleted) {
    return (
      <CompletedTodos
        completedTodos={completedTodos}
        onBack={() => setShowCompleted(false)}
        onClear={clearCompletedTodos}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <TodoEditor onSubmit={addTodo} />

        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">アクティブなTODO ({todos.length})</h2>

          {completedTodos.length > 0 && (
            <button
              type="button"
              onClick={() => setShowCompleted(true)}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
            >
              <CheckSquare size={16} />
              完了済み ({completedTodos.length})
            </button>
          )}
        </div>
      </div>

      <TodoList todos={todos} onReorder={reorderTodos} onComplete={markAsCompleted} />
    </div>
  );
}
