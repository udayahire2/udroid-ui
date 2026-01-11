# Button

A premium interactive element that triggers an action or event, featuring multiple variants and sizes.

## Installation

```bash
npm install @radix-ui/react-slot
```

## Usage

```tsx
import { Button } from "@/udroid/src/components/button/button";

export default function ButtonDemo() {
  return (
    <Button variant="default" size="md">
      Click me
    </Button>
  );
}
```

## API Reference

### Button

Accepts standard HTMLButtonElement props and the following custom props:

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link'` | `'default'` | The visual style of the button. |
| `size` | `'default' \| 'sm' \| 'lg' \| 'icon'` | `'default'` | The size of the button. |
| `asChild` | `boolean` | `false` | Change the underlying element using Radix Slot. |
| `disabled` | `boolean` | `false` | Disables the button. |
