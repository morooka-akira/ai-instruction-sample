"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Plus } from "lucide-react";

interface TodoEditorProps {
  onSubmit: (content: string) => void;
  placeholder?: string;
}

export default function TodoEditor({
  onSubmit,
  placeholder = "新しいTODOを入力...",
}: TodoEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    editorProps: {
      attributes: {
        class: "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
      },
    },
  });

  const handleSubmit = () => {
    if (!editor) return;

    const content = editor.getHTML();
    if (content.trim() === "<p></p>" || content.trim() === "") return;

    onSubmit(content);
    editor.commands.clearContent();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
      <div className="flex items-start gap-2">
        <div className="flex-1">
          <EditorContent
            editor={editor}
            className="min-h-[40px] w-full"
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
          />
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          aria-label="TODOを追加"
        >
          <Plus size={16} />
        </button>
      </div>

      {editor && (
        <div className="flex gap-2 mt-2 pt-2 border-t border-gray-200">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`px-2 py-1 text-xs rounded ${
              editor.isActive("bold")
                ? "bg-gray-200 text-gray-800"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            B
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`px-2 py-1 text-xs rounded italic ${
              editor.isActive("italic")
                ? "bg-gray-200 text-gray-800"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            I
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`px-2 py-1 text-xs rounded ${
              editor.isActive("bulletList")
                ? "bg-gray-200 text-gray-800"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            • List
          </button>
        </div>
      )}
    </div>
  );
}
