import { cn } from "@/lib/utils";

interface TitleProps {
  children: React.ReactNode;

  className?: string;
}
const Title = ({ children, className }: TitleProps) => {
  return (
    <h2 className={cn("text-4xl font-bold tracking-wider", className)}>
      {children}
    </h2>
  );
};

export default Title;
