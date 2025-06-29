"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Check, GripVertical } from "lucide-react";
import type { TodoItem as TodoItemType } from "@/types/todo";

interface TodoItemProps {
  todo: TodoItemType;
  onComplete: (id: string) => void;
}

export default function TodoItem({ todo, onComplete }: TodoItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: todo.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleComplete = () => {
    onComplete(todo.id);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <button
        type="button"
        {...attributes}
        {...listeners}
        className="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-gray-600 cursor-grab active:cursor-grabbing"
        aria-label="ドラッグして並び替え"
      >
        <GripVertical size={16} />
      </button>

      <div
        className="flex-1 prose prose-sm max-w-none"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: User-generated content is sanitized by Tiptap
        dangerouslySetInnerHTML={{ __html: todo.content }}
      />

      <button
        type="button"
        onClick={handleComplete}
        className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
        aria-label="TODOを完了"
      >
        <Check size={16} />
      </button>
    </div>
  );
}
