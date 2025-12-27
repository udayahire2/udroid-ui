import ShikiHighlighter from "react-shiki";

interface CodeBlockProps {
  code: string;
  language: string;
  theme?: string;
  showLineNumbers?: boolean;
}

export const CodeBlock = ({
  code,
  language,
  theme = "github-dark",
  showLineNumbers = false,
}: CodeBlockProps) => {
  return (
    <ShikiHighlighter
      language={language}
      theme={theme}
      showLineNumbers={showLineNumbers}
    >
      {code.trim()}
    </ShikiHighlighter>
  );
};
