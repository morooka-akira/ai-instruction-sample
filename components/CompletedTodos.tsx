"use client";

import { ChevronLeft, Clock, Trash2 } from "lucide-react";
import type { TodoItem as TodoItemType } from "@/types/todo";

interface CompletedTodosProps {
  completedTodos: TodoItemType[];
  onBack: () => void;
  onClear: () => void;
}

export default function CompletedTodos({ completedTodos, onBack, onClear }: CompletedTodosProps) {
  const formatCompletedDate = (date: Date | undefined) => {
    if (!date) return "";
    return new Intl.DateTimeFormat("ja-JP", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ChevronLeft size={20} />
          戻る
        </button>

        {completedTodos.length > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="flex items-center gap-2 px-3 py-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md transition-colors"
          >
            <Trash2 size={16} />
            すべてクリア
          </button>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          完了済みTODO ({completedTodos.length})
        </h2>

        {completedTodos.length === 0 ? (
          <div className="text-center py-8 text-gray-500">完了したTODOアイテムがありません。</div>
        ) : (
          <div className="space-y-3">
            {completedTodos
              .sort((a, b) => {
                const aDate = a.completedAt?.getTime() || 0;
                const bDate = b.completedAt?.getTime() || 0;
                return bDate - aDate; // 新しい順
              })
              .map((todo) => (
                <div key={todo.id} className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <div
                    className="prose prose-sm max-w-none mb-2 opacity-75"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: User-generated content is sanitized by Tiptap
                    dangerouslySetInnerHTML={{ __html: todo.content }}
                  />

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock size={14} />
                    {formatCompletedDate(todo.completedAt)}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
