# Textarea

A multi-line text input field with advanced features like auto-growing and slot support.

## Installation

No external dependencies required (uses native `textarea`).

## Usage

```tsx
import { Textarea } from "@/udroid/src/components/textarea/textarea";
import { Paperclip } from "lucide-react";

export default function TextareaDemo() {
  return (
    <Textarea
      placeholder="Type your message..."
      autoGrow
      startContent={<Paperclip className="size-4" />}
    />
  );
}
```

## API Reference

### Textarea

Accepts standard HTMLTextareaElement props and the following custom props:

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'default' \| 'filled' \| 'error' \| 'success'` | `'default'` | The visual style of the textarea. |
| `resize` | `'none' \| 'vertical' \| 'horizontal' \| 'both'` | `'vertical'` | Controls the resizeability of the textarea. Forced to `'none'` if `autoGrow` is true. |
| `autoGrow` | `boolean` | `false` | If true, the textarea grows automatically with content. |
| `startContent` | `ReactNode` | - | Element to render at the top-start (e.g., icons). |
| `endContent` | `ReactNode` | - | Element to render at the bottom-end (e.g., send button). |
| `disabled` | `boolean` | `false` | Disables the textarea. |
| `readOnly` | `boolean` | `false` | Makes the textarea read-only. |
