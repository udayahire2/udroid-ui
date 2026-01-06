import ShikiHighlighter from "react-shiki";

interface CodeBlockProps {
  code: string;
  language: string;
  theme?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export const CodeBlock = ({
  code,
  language,
  theme = "github-dark",
  showLineNumbers = false,
  className = "",
}: CodeBlockProps) => {
  return (
    <div className={className}>
      <ShikiHighlighter
        language={language}
        theme={theme}
        showLineNumbers={showLineNumbers}
      >
        {code.trim()}
      </ShikiHighlighter>
    </div>
  );
};
