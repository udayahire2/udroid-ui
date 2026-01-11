# Separator

Visually or semantically separates content.

## Installation

```bash
npm install @radix-ui/react-separator
```

## Usage

```tsx
import { Separator } from "@/udroid/src/components/separator/separator";

export default function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  );
}
```

## API Reference

### Separator

The root component. Accepts all props from `@radix-ui/react-separator`.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | The orientation of the separator. |
| `decorative` | `boolean` | `true` | When `true`, signifies that it is purely visual, removes it from accessibility tree. |
| `variant` | `'default' \| 'muted' \| 'gradient' \| 'dashed'` | `'default'` | The visual style of the separator. |
