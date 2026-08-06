import type {
  ElementType,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from "react";

export interface NavLink {
  label: string;
  href: string;
}

export interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: ReactNode;
}

export interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export interface ServiceCardData {
  icon: ReactNode;
  title: string;
  description: string;
  features?: string[];
}

export interface PortfolioProject {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface TestimonialData {
  name: string;
  role: string;
  company?: string;
  content: string;
  avatar?: string;
  rating?: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

export interface ContainerProps
  extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  as?: ElementType;
}

export interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  padding?: "sm" | "md" | "lg";
}

export interface SocialLink {
  label: string;
  href: string;
  icon: ReactNode;
}