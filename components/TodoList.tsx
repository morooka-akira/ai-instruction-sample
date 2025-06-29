"use client";

import {
  closestCenter,
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import type { TodoItem as TodoItemType } from "@/types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: TodoItemType[];
  onReorder: (todos: TodoItemType[]) => void;
  onComplete: (id: string) => void;
}

export default function TodoList({ todos, onReorder, onComplete }: TodoListProps) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = todos.findIndex((todo) => todo.id === active.id);
      const newIndex = todos.findIndex((todo) => todo.id === over.id);

      const reorderedTodos = arrayMove(todos, oldIndex, newIndex);
      onReorder(reorderedTodos);
    }
  };

  if (todos.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        TODOアイテムがありません。上のエディタから追加してください。
      </div>
    );
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={todos} strategy={verticalListSortingStrategy}>
        <div className="space-y-3">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onComplete={onComplete} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
