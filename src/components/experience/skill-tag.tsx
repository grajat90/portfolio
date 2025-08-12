import { cn } from "@/lib/utils";

interface SkillTagProps {
  text: string;
  color: string;
  textColor?: string;
  className?: string;
}

export function SkillTag({
  text,
  color,
  textColor = "text-white",
  className,
}: SkillTagProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded px-1.5 py-px",
        className,
      )}
      style={{ backgroundColor: color }}
    >
      <span
        className={cn(
          "font-geist text-[12px] font-normal leading-normal text-nowrap",
          textColor,
        )}
      >
        {text}
      </span>
    </div>
  );
}
