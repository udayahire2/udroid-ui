import { CodeBlock } from "./code-block";

export default function ShikiEditor() {
  const sampleCode = `
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));
  `;

  return (
    <>
    <div style={{ padding: "20px" }}>
      <h1>Code Highlighter Demo</h1>
      <CodeBlock
        code={sampleCode}
        language="typescript"
        theme="github-dark"
        showLineNumbers={true}
      />
    </div>
    </>
  );
}
