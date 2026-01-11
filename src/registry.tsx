import { Button } from "@/components/ui/button"
import { Avatar, AvatarGroup } from "@/components/ui/avatar"

export const Index: Record<string, any> = {
  "button-demo": {
    component: () => (
      <div className="flex gap-2">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
      </div>
    ),
    code: `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return (
    <div className="flex gap-2">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
  )
}
`
  },
  "avatar-demo": {
    component: () => (
      <div className="flex gap-4 items-center">
        {/* @ts-ignore */}
        <Avatar src="https://github.com/shadcn.png" alt="@shadcn" fallback="CN" />
        {/* @ts-ignore */}
        <AvatarGroup size="md" limit={3}>
          {/* @ts-ignore */}
          <Avatar fallback="A" />
          {/* @ts-ignore */}
          <Avatar fallback="B" />
          {/* @ts-ignore */}
          <Avatar fallback="C" />
          {/* @ts-ignore */}
          <Avatar fallback="D" />
        </AvatarGroup>
      </div>
    ),
    code: `import {
  Avatar,
  AvatarGroup,
  AvatarBadge,
} from "@/components/ui/avatar";

export default function AvatarDemo() {
  return (
    <div className="flex gap-4">
      <Avatar src="https://github.com/shadcn.png" alt="@shadcn" fallback="CN" />
      
      <AvatarGroup size="md" limit={3}>
         <Avatar fallback="A" />
         <Avatar fallback="B" />
         <Avatar fallback="C" />
         <Avatar fallback="D" />
      </AvatarGroup>
    </div>
  );
}`
  },
}
