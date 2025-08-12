import { ExperienceCard, type ExperienceItem } from "./experience-card";
import { cn } from "@/lib/utils";
import { OpynExperienceDetails } from "./experience-details/opyn";
// import { FountainExperienceDetails } from "./experience-details/fountain";
import { OptionlogyExperienceDetails } from "./experience-details/optionlogy";
import { GreexExperienceDetails } from "./experience-details/greex";
import { MadverseExperienceDetails } from "./experience-details/madverse";
import { InnovaccerExperienceDetails } from "./experience-details/innovaccer";

const experiences: ExperienceItem[] = [
  // {
  //   company: "Fountain",
  //   role: "Full Stack Engineer",
  //   duration: "Part Time Contract (over)",
  //   tags: [
  //     { text: "Trading", color: "#c34d4f" },
  //     { text: "DeFi", color: "#8e46da" },
  //     { text: "Fintech", color: "#2f97bd" },
  //   ],
  //   image: "/companies/fountain.png",
  //   Details: FountainExperienceDetails,
  // },
  {
    company: "Opyn Inc.",
    role: "Full Stack Engineer",
    duration: "Nov 2024 - July 2025",
    tags: [
      { text: "Web3", color: "#963d9e" },
      { text: "Perps", color: "#c48d27" },
      { text: "Fintech", color: "#2f97bd" },
    ],
    image: "/companies/opyn.png",
    Details: OpynExperienceDetails,
  },
  {
    company: "Optionlogy",
    role: "CTO, Founder",
    duration: "Nov 2021 - Dec 2024",
    tags: [
      { text: "Auto Trading", color: "#49a849" },
      { text: "Fintech", color: "#2f97bd" },
    ],
    image: "/companies/optionlogy.png",
    Details: OptionlogyExperienceDetails,
  },
  {
    company: "GreeX",
    role: "CTO",
    duration: "Feb 2024 - July 2024",
    tags: [
      { text: "CEX", color: "#5457ed" },
      {
        text: "Exchange",
        color: "#8fc54d",
        textColor: "text-black",
      },
      { text: "Fintech", color: "#2f97bd" },
    ],
    image: "/companies/greex.png",
    Details: GreexExperienceDetails,
  },
  {
    company: "Madverse",
    role: "Principal Engineer",
    duration: "Feb 2024 - June 2024",
    tags: [
      {
        text: "AI",
        color: "#dacf4f",
        textColor: "text-black",
      },
      { text: "B2B", color: "#636363" },
      { text: "Music/Art", color: "#5a2fbd" },
    ],
    image: "/companies/madverse.png",
    Details: MadverseExperienceDetails,
  },
  {
    company: "Innovaccer",
    role: "Data Analyst",
    duration: "Feb 2022 - Nov 2022",
    tags: [
      { text: "Healthtech", color: "#da6e46" },
      { text: "Data Ops", color: "#5b5b5b" },
    ],
    image: "/companies/innovaccer.png",
    Details: InnovaccerExperienceDetails,
  },
];

export function ExperienceSection({ className }: { className?: string }) {
  return (
    <section
      id="experience"
      className={cn(
        "relative bg-portfolio-bg py-20 px-[250px] flex flex-col items-center justify-center gap-20 w-full",
        className,
      )}
    >
      <div className="w-full flex flex-col gap-1">
        <span className="font-medium text-[38px] -tracking-[2px]">
          Work Experience
        </span>
        <span className="font-light text-sm text-white/60">
          Hover on any one to see details
        </span>
      </div>
      <div className="grid grid-cols-3 items-center justify-items-center gap-x-7 gap-y-10 w-full">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
}
