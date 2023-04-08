import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const MarkdownText = ({ fileUrl }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(fileUrl)
      .then((response) => response.text())
      .then((data) => setText(data));
  }, [fileUrl]);
  return (
    <div>
      <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} />
    </div>
  );
};
