import { ArrowRightIcon } from "lucide-react";

export function HeroCard({
  id,
  title,
  description,
  icon,
  setIsHovered,
  href,
}: {
  id: string;
  title: string;
  description: string;
  icon: string;
  setIsHovered: (isHovered: boolean) => void;
  href: string;
}) {
  return (
    <a href={href}>
      <button
        className="rounded-[20px] transition-all duration-300 hover:glass-bg hover:bg-card cursor-pointer group hover:shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)]"
        id={id}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center justify-center gap-6 overflow-clip px-4 py-2">
          <div className="h-[85px] w-[85px] shrink-0 overflow-clip">
            <img
              src={icon}
              alt={title}
              className="h-full w-full object-contain"
              width={85}
              height={85}
              decoding="async"
            />
          </div>
          <div className="flex items-center justify-start gap-2.5">
            <div className="flex flex-col items-start justify-start gap-2 text-left">
              <div className="text-[24px] font-normal">{title}</div>
              <div className="max-w-[200px] text-lg font-light text-muted-foreground">
                {description}
              </div>
            </div>
            <div className="transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1">
              <ArrowRightIcon
                className="h-6 w-6 text-foreground"
                strokeWidth={2}
              />
            </div>
          </div>
        </div>
      </button>
    </a>
  );
}
