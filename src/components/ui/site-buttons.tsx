import type { ComponentProps } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SiteButtonProps = ComponentProps<typeof Button>;

const baseButton =
  "h-11 rounded-md px-5 text-sm transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-site active:translate-y-px";

export function PrimaryButton({ className, ...props }: SiteButtonProps) {
  return (
    <Button
      className={cn(baseButton, "shadow-soft hover:shadow-lift", className)}
      size="lg"
      {...props}
    />
  );
}

export function SecondaryButton({ className, ...props }: SiteButtonProps) {
  return (
    <Button
      className={cn(
        baseButton,
        "border-line bg-background/70 hover:bg-secondary",
        className,
      )}
      size="lg"
      variant="outline"
      {...props}
    />
  );
}

export function GhostButton({ className, ...props }: SiteButtonProps) {
  return (
    <Button
      className={cn(baseButton, "hover:bg-secondary/70 px-3", className)}
      size="lg"
      variant="ghost"
      {...props}
    />
  );
}
