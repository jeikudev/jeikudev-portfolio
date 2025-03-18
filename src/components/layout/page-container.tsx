import { cn } from "@/lib/utils";
import { PageContainerProps } from "@/types";

export function PageContainer({
  children,
  className,
  maxWidth = "xl",
  withGutter = true,
  as: Component = "div",
}: PageContainerProps) {
  const maxWidthClass = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
    full: "max-w-full",
  };

  return (
    <Component
      className={cn(
        "mx-auto w-full",
        maxWidthClass[maxWidth],
        withGutter && "px-4 md:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </Component>
  );
}
