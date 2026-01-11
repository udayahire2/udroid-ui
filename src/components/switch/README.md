# Switch

A control that allows the user to toggle between checked and not checked.

## Installation

```bash
npm install @radix-ui/react-switch
```

## Usage

```tsx
import { Switch } from "@/udroid/src/components/switch/switch";

export default function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <label htmlFor="airplane-mode">Airplane Mode</label>
    </div>
  );
}
```

## API Reference

### Switch

The root component. Accepts all props from `@radix-ui/react-switch`.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'default' \| 'premium'` | `'default'` | The visual style of the switch. 'premium' provides a high-end square look with depth. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The size of the switch. Note: 'premium' variant has a fixed hero size. |
| `checked` | `boolean` | - | The controlled checked state of the switch. |
| `defaultChecked` | `boolean` | - | The default checked state when uncontrolled. |
| `onCheckedChange` | `(checked: boolean) => void` | - | Event handler called when the state changes. |
| `disabled` | `boolean` | - | When true, preventing interaction. |
