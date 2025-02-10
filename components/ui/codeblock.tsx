"use client";

import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({
  code,
  language = "typescript",
  filename,
  showLineNumbers = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg bg-zinc-950 my-4">
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800">
          <span className="text-sm text-zinc-400">{filename}</span>
        </div>
      )}
      <div className="relative">
        <Highlight
          theme={themes.nightOwl}
          code={code.trim()}
          language={language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={`${className} overflow-x-auto p-4 text-sm`}
              style={style}
            >
              {tokens.map((line, i) => {
                const { key: _key, ...lineProps } = getLineProps({
                  line,
                  key: i,
                });
                return (
                  <div key={i} {...lineProps}>
                    {showLineNumbers && (
                      <span className="inline-block w-8 text-zinc-600 select-none">
                        {i + 1}
                      </span>
                    )}
                    {line.map((token, key) => {
                      const { key: _tokenKey, ...tokenProps } = getTokenProps({
                        token,
                        key,
                      });
                      return <span key={key} {...tokenProps} />;
                    })}
                  </div>
                );
              })}
            </pre>
          )}
        </Highlight>
        <button
          onClick={copyToClipboard}
          className="absolute right-2 top-2 p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4 text-zinc-400" />
          )}
        </button>
      </div>
    </div>
  );
}
