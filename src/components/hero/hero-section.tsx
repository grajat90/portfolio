import { ArrowUpRightIcon } from "lucide-react";
import { HeroCard } from "./hero-card";
import { useRef, useState } from "react";
import Xarrow from "react-xarrows";
import { cn } from "@/lib/utils";

export function HeroSection({ className }: { className?: string }) {
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [isPastWorkCardHovered, setIsPastWorkCardHovered] =
    useState<boolean>(false);
  const [isSkillsCardHovered, setIsSkillsCardHovered] =
    useState<boolean>(false);

  return (
    <section
      id="home"
      className={cn(
        "relative flex h-screen w-full flex-row justify-between items-center bg-portfolio-bg px-[250px] py-50",
        className,
      )}
    >
      {/* Left side */}
      <div
        ref={descriptionRef}
        className="flex flex-col items-start items-center h-full gap-20 py-10"
      >
        <div className="flex flex-col items-start gap-4">
          <h1 className="inline-flex items-center gap-2.5 text-[54px] -tracking-[2px]">
            <span className="font-light">Hi I'm</span>
            <span className="font-medium text-accent">Rajat Goel</span>
          </h1>
          {/* Role list */}
          <div className="font-light text-lg">
            <ul className="mb-0 list-disc">
              <li className="mb-0 ml-5">
                <span className="leading-normal">Lead Software Engineer</span>
              </li>
              <li className="mb-0 ml-5">
                <span className="leading-normal">Ex CTO and Tech Leader</span>
              </li>
              <li className="mb-0 ml-5">
                <span className="leading-normal">
                  Fintech, Options & DeFi Expert
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 text-lg">
          {/* Description */}
          <div className="flex flex-col items-start gap-1">
            <span className="mb-0 block">
              I write clean and maintainable code,
            </span>
            <span className="mb-0 block">
              build end to end software products,
            </span>
            <span className="block">lead architecture and tech teams.</span>
          </div>

          {/* Social Links */}
          <div className="flex flex-row gap-6">
            <a
              href="https://www.linkedin.com/in/-rajatgoel/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex items-center justify-center gap-1 group cursor-pointer transition-opacity hover:opacity-70"
            >
              <div className="text-portfolio-text underline">LinkedIn</div>
              <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:rotate-45" />
            </a>

            <a
              href="https://github.com/grajat90"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex items-center justify-center gap-1 group cursor-pointer transition-opacity hover:opacity-70"
            >
              <div className="text-portfolio-text underline">GitHub</div>
              <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:rotate-45" />
            </a>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex flex-col gap-20">
        {/* My Past Works Card */}
        <HeroCard
          id="past-work-card"
          title="My Past Works"
          description="View Experience with detailed overview"
          icon="/past-work.png"
          setIsHovered={setIsPastWorkCardHovered}
          href="#experience"
        />

        {/* Technical Skills Card */}
        <HeroCard
          id="skills-card"
          title="Technical Skills"
          description="Languages, frameworks, tools, DBs, etc"
          icon="/skills.png"
          setIsHovered={setIsSkillsCardHovered}
          href="#tech-skills"
        />
      </div>
      <Xarrow
        start={descriptionRef}
        end="past-work-card"
        color={isPastWorkCardHovered ? "#866DF4" : "#949494"}
        strokeWidth={2}
        headSize={4}
        curveness={0.35}
        zIndex={isPastWorkCardHovered ? 100 : 50}
      />
      <Xarrow
        start={descriptionRef}
        end="skills-card"
        color={isSkillsCardHovered ? "#866DF4" : "#949494"}
        strokeWidth={2}
        headSize={4}
        curveness={0.35}
        zIndex={isSkillsCardHovered ? 100 : 50}
      />
    </section>
  );
}
