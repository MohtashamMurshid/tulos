import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";
import { Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

interface SocailMediaProps {
  className?: string;
  tooltip?: string;
  iconClassName?: string;
}
const Links = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/clickswithm",
    icon: <Instagram />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/codewithm",
    icon: <Twitter />,
  },
  {
    name: "Github",
    url: "https://github.com/MohtashamMurshid",
    icon: <Github />,
  },
];

const SocailMedia = ({
  className,
  tooltip,
  iconClassName,
}: SocailMediaProps) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-6 justify-center", className)}>
        {Links.map((link) => (
          <Tooltip key={link.name}>
            <TooltipTrigger asChild>
              <Link
                href={link.url}
                className={cn("p-2 border rounded-full ", iconClassName)}
              >
                {link?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "font-semibold text-sm dark:bg-white bg-black dark:text-black text-white p-2 rounded-md",
                tooltip
              )}
            >
              {link.name}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocailMedia;
