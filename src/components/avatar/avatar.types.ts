import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { type VariantProps } from "class-variance-authority";
import { avatarVariants, avatarBadgeVariants, avatarGroupVariants } from "./avatar.styles";

export interface AvatarProps
    extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {
    /**
     * The source URL of the avatar image.
     */
    src?: string;
    /**
     * Alternatives text for the avatar image.
     */
    alt?: string;
    /**
     * Fallback content to display when the image is loading or fails.
     * Can be initials (string) or an icon (ReactNode).
     */
    fallback?: React.ReactNode;
    /**
     * Delay in milliseconds before the fallback is shown.
     * Useful for preventing flicker on fast loads.
     * @default 600
     */
    delayMs?: number;
}

export interface AvatarBadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarBadgeVariants> {
}

export interface AvatarGroupProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarGroupVariants> {
    /**
     * Limit the number of avatars shown.
     * Remaining avatars will be counted in a "+N" overflow avatar.
     */
    limit?: number;
}
