import { SkillTag } from "./skill-tag";
import { cn } from "@/lib/utils";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  tags: Array<{
    text: string;
    color: string;
    textColor?: string;
  }>;
  image: string;
  Details: () => React.ReactNode;
}

interface ExperienceCardProps extends ExperienceItem {
  className?: string;
}

export function ExperienceCard({
  company,
  role,
  duration,
  tags,
  image,
  className = "",
  Details,
}: ExperienceCardProps) {
  return (
    <HoverCard openDelay={100} closeDelay={150}>
      <HoverCardTrigger asChild>
        <div
          className={cn(
            "w-[370px] rounded-[38px] p-4 transition-all duration-300 hover:glass-bg hover:bg-card cursor-help group hover:shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)]",
            className,
          )}
        >
          <div className="flex items-start gap-4">
            <div className="h-[80px] w-[80px] shrink-0 rounded-[20px] overflow-hidden">
              <img
                src={image}
                alt={company}
                className="h-full w-full object-contain"
                width={80}
                height={80}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="flex flex-col items-start gap-1.5">
              <span className="text-[24px] font-medium tracking-[-1px]">
                {company}
              </span>
              <span className="text-[20px] font-medium tracking-[-0.8px]">
                {role}
              </span>
              <div className="flex flex-wrap items-center gap-1.5">
                {tags.map((tag, index) => (
                  <SkillTag
                    key={index}
                    text={tag.text}
                    color={tag.color}
                    textColor={tag.textColor}
                  />
                ))}
              </div>
              <span className="text-[16px] font-light tracking-[-0.64px]">
                {duration}
              </span>
            </div>
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent
        className="bg-[#2F2F2F] rounded-[20px] p-6 border-none w-[500px] z-300 shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)]"
        side="right"
      >
        <div className="flex flex-row items-start justify-between w-full mb-6">
          <div className="flex flex-col items-start gap-1.5">
            <span className="text-[20px] font-medium tracking-[-0.8px]">
              {role}
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              {tags.map((tag, index) => (
                <SkillTag
                  key={index}
                  text={tag.text}
                  color={tag.color}
                  textColor={tag.textColor}
                />
              ))}
            </div>
            <span className="text-[14px] font-light tracking-[-0.56px]">
              {duration}
            </span>
          </div>
          <div className="h-[64px] w-[64px] shrink-0 rounded-[16px] overflow-hidden">
            <img
              src={image}
              alt={company}
              className="h-full w-full object-contain"
              width={64}
              height={64}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <Details />
      </HoverCardContent>
    </HoverCard>
  );
}
