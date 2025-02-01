"use client";

import { X } from "lucide-react";
import React, { useEffect, useState } from "react";

interface TagInputProps {
  maxTags?: number;
  onChange?: (tags: string[]) => void;
  value?: string[];
}

const TagInput: React.FC<TagInputProps> = ({
  maxTags = 5,
  onChange,
  value,
}) => {
  const [tags, setTags] = useState<string[]>(value || []);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (value) {
      setTags(value);
    }
  }, [value]);

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newTag = inputValue.trim();

      if (newTag && !tags.includes(newTag) && tags.length < maxTags) {
        const updatedTags = [...tags, newTag];
        setTags(updatedTags);
        onChange?.(updatedTags);
      }

      setInputValue("");
    }
  };

  const removeTag = (tag: string) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
    onChange?.(updatedTags);
  };

  return (
    <div className="flex flex-wrap items-center gap-2 min-h-10 h-full w-full rounded-md border border-input bg-background px-2 py-1 text-base md:text-sm focus-within:border-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background">
      {tags.length > 0 &&
        tags.map((tag) => (
          <span
            key={tag}
            className="bg-muted flex items-center gap-x-1 h-7 px-2 text-xs font-medium rounded-full"
          >
            {tag}
            <X
              className="size-3 cursor-pointer"
              onClick={() => removeTag(tag)}
            />
          </span>
        ))}

      {tags.length < maxTags && (
        <input
          className="bg-transparent w-2/5 h-7 border outline-none text-sm placeholder:text-sm"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={addTag}
          placeholder="Add a tag"
        />
      )}
    </div>
  );
};

export default TagInput;
