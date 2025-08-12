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
      className="relative bg-portfolio-bg py-20 px-[250px] flex flex-col items-center justify-center gap-10 w-full"
    >
      <div className="font-medium text-[38px] -tracking-[2px] w-full">
        Languages & Tools
      </div>
      <div className="flex flex-row flex-wrap gap-x-18 gap-y-12 w-full">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center gap-4 w-28"
          >
            <div className="w-12 h-12 rounded-xl overflow-hidden">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-full h-full object-contain object-center"
                width={48}
                height={48}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="text-base font-medium">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
