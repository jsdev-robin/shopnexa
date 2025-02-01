"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
const QuillEditorDynamic = dynamic(() => import("react-quill-new"), {
  ssr: false,
});

interface EditorProps {
  onChange?: (value: string) => void;
  value?: string;
}

interface EditorStaticProps {
  modules: Record<string, unknown>;
  formats: string[];
}

const QuillEditor: React.FC<EditorProps> & EditorStaticProps = ({
  onChange,
  value,
  ...rest
}) => {
  const [editorHtml, setEditorHtml] = useState<string>(value || "");

  const handleChange = (newValue: string) => {
    setEditorHtml(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="border border-border overflow-x-hidden rounded-lg focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background focus-within:border-blue-500">
      <QuillEditorDynamic
        modules={QuillEditor.modules}
        theme="snow"
        value={editorHtml}
        onChange={handleChange}
        {...rest}
      />
    </div>
  );
};

QuillEditor.modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ script: "sub" }, { script: "super" }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ align: [] }],
    [{ direction: "rtl" }],
    ["blockquote", "code-block"],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ size: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

QuillEditor.formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "script",
  "list",
  "bullet",
  "indent",
  "align",
  "direction",
  "blockquote",
  "code-block",
  "color",
  "background",
  "font",
  "size",
  "link",
  "image",
  "video",
];

export default QuillEditor;
