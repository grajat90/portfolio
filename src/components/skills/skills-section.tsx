interface Skill {
  name: string;
  icon: string;
}

// nextjs, typecript, nodejs, python, GoLang, Java, kafka, apache flink, mongodb, postgresql, supabase, timescsaledb
const skills: Skill[] = [
  {
    name: "React",
    icon: "/skills/react.png",
  },
  {
    name: "NextJS",
    icon: "/skills/nextjs.jpeg",
  },
  {
    name: "TypeScript",
    icon: "/skills/typescript.png",
  },
  {
    name: "NodeJS",
    icon: "/skills/nodejs.png",
  },
  {
    name: "Python",
    icon: "/skills/python.png",
  },
  {
    name: "GoLang",
    icon: "/skills/golang.png",
  },
  {
    name: "Java",
    icon: "/skills/java.png",
  },
  {
    name: "Kafka",
    icon: "/skills/kafka.png",
  },
  {
    name: "Apache Flink",
    icon: "/skills/flink.png",
  },
  {
    name: "MongoDB",
    icon: "/skills/mongodb.png",
  },

  {
    name: "PostgreSQL",
    icon: "/skills/postgresql.png",
  },
  {
    name: "Supabase",
    icon: "/skills/supabase.jpg",
  },
  {
    name: "TimescaleDB",
    icon: "/skills/timescaledb.png",
  },
  {
    name: "Langchain",
    icon: "/skills/langchain.jpg",
  },
  {
    name: "Figma",
    icon: "/skills/figma.png",
  },
];

export function SkillsSection() {
  return (
    <section
      id="tech-skills"
      className="relative bg-portfolio-bg py-10 lg:py-20 px-6 lg:px-[250px] flex flex-col items-center justify-center gap-8 md:gap-10 w-full"
    >
      <div className="font-medium text-[28px] md:text-[38px] -tracking-[2px] w-full">
        Languages & Tools
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-6 sm:gap-x-1 gap-y-8 w-full">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center gap-3 w-20 sm:w-24 md:w-26"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-full h-full object-contain object-center"
                width={40}
                height={40}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="text-xs sm:text-sm md:text-base font-medium text-center">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
