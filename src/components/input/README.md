# Input

A fundamental component for collecting user text input, capable of displaying icons and various visual states.

## Installation

No external dependencies required (uses native `input`).

## Usage

```tsx
import { Input } from "@/udroid/src/components/input/input";
import { Mail } from "lucide-react";

export default function InputDemo() {
  return (
    <Input
      type="email"
      placeholder="Email"
      startContent={<Mail className="size-4" />}
    />
  );
}
```

## API Reference

### Input

Accepts standard HTMLInputElement props and the following custom props:

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'default' \| 'filled' \| 'error' \| 'success'` | `'default'` | The visual style of the input. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The size of the input. |
| `startContent` | `ReactNode` | - | Element to render at the start (e.g., icons). |
| `endContent` | `ReactNode` | - | Element to render at the end (e.g., icons). |
| `asChild` | `boolean` | `false` | Change the underlying element using Radix Slot. |
| `disabled` | `boolean` | `false` | Disables the input. |
