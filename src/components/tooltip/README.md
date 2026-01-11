# Tooltip

A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.

## Installation

```bash
npm install @radix-ui/react-tooltip
```

## Usage

```tsx
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/udroid/src/components/tooltip/tooltip";

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button>Hover me</button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
```

## API Reference

### Tooltip

The root component that manages the open state. Accepts all props from `@radix-ui/react-tooltip`.

### TooltipTrigger

The button that toggles the tooltip. Accepts all props from `@radix-ui/react-tooltip`.

### TooltipContent

The component that pops out when the tooltip is open.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'default' \| 'premium' \| 'glass' \| 'minimal'` | `'premium'` | The visual style of the tooltip. |
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'` | The preferred side of the trigger to render against. |
| `align` | `'start' \| 'center' \| 'end'` | `'center'` | The preferred alignment against the trigger. |

### TooltipProvider

Wraps your app or a group of tooltips to provide global configuration.
