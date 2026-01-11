# Radio Component

A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.

## Usage

```tsx
import { RadioGroup, RadioGroupItem } from "@/components/udroid/radio";
import { Label } from "@/components/udroid/label";

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  );
}
```

## Props

The `RadioGroup` and `RadioGroupItem` components extend the Radix UI Radio Group primitives.

### RadioGroup

| Prop | Type | Description |
| :--- | :--- | :--- |
| `orientation` | `"horizontal" \| "vertical"` | The orientation of the radio group. |
| `defaultValue` | `string` | The value of the radio item that should be checked when initially rendered. |
| `value` | `string` | The controlled value of the radio item to check. |
| `onValueChange` | `(value: string) => void` | Event handler called when the value changes. |

### RadioGroupItem

| Prop | Type | Description |
| :--- | :--- | :--- |
| `value` | `string` | The unique value of the radio item. |
| `disabled` | `boolean` | When true, prevents the user from interacting with the radio item. |
| `variant` | `"default" \| "premium"` | Visual style variant. |
