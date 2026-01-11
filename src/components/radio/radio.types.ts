import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import type { VariantProps } from "class-variance-authority";
import { radioGroupVariants, radioGroupItemVariants } from "./radio.styles";

export interface RadioGroupProps
    extends Omit<React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>, "orientation">,
    VariantProps<typeof radioGroupVariants> {
    children?: React.ReactNode;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
}

export interface RadioGroupItemProps
    extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioGroupItemVariants> {
    value: string;
    id?: string;
}
