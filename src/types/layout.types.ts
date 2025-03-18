import { ReactNode } from "react";

export interface PageContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  withGutter?: boolean;
  as?: "div" | "section" | "article";
}
