"use client";

import { Button } from "@/components/ui/button"; // Adjust based on your UI library
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Bold, Italic, List, ListOrdered, Redo, Undo } from "lucide-react";

interface EditorProps {
  content?: string;
  onChange?: (content: string) => void;
}

const TiptapEditor = ({ content = "", onChange }: EditorProps) => {
  const editor = useEditor({
    extensions: [StarterKit], // StarterKit includes bold, italic, lists, etc.
    content: content || "<p>Write here...</p>",
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
  });

  if (!editor) return <div>Loading editor...</div>;

  return (
    <div className="min-h-[150px] rounded border p-3">
      {/* Toolbar */}
      <div className="mb-2 flex gap-2 border-b pb-2">
        <Button
          onClick={() => editor.chain().focus().toggleBold().run()}
          type="button"
          className={editor.isActive("bold") ? "bg-gray-300" : ""}
        >
          <Bold size={16} />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          type="button"
          className={editor.isActive("italic") ? "bg-gray-300" : ""}
        >
          <Italic size={16} />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          type="button"
          className={editor.isActive("bulletList") ? "bg-gray-300" : ""}
        >
          <List size={16} />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          type="button"
          className={editor.isActive("orderedList") ? "bg-gray-300" : ""}
        >
          <ListOrdered size={16} />
        </Button>
        <Button
          onClick={() => editor.chain().focus().undo().run()}
          type="button"
        >
          <Undo size={16} />
        </Button>
        <Button
          onClick={() => editor.chain().focus().redo().run()}
          type="button"
        >
          <Redo size={16} />
        </Button>
      </div>

      {/* Editor Content */}
      <EditorContent
        editor={editor}
        className="rounded border p-2 outline-none ring-0 focus-visible:outline-0"
      />
    </div>
  );
};

export default TiptapEditor;
