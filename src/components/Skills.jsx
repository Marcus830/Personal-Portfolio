const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      {
        name: "Node.js",
        icon: "/nodejs-1-logo-svgrepo-com.svg",
        level: 4,
        alt: "Node.js logo",
      },
      {
        name: "C",
        icon: "/c-logo-svgrepo-com.svg",
        level: 3,
        alt: "C language logo",
      },
      {
        name: "JavaScript",
        icon: "/javascript-logo-svgrepo-com.svg",
        level: 5,
        alt: "JavaScript logo",
      },
      {
        name: "C#",
        icon: "/Csharp.svg",
        level: 3,
        alt: "C# logo",
      },
    ],
    gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  },
  {
    category: "Databases",
    skills: [
      {
        name: "MySQL",
        icon: "/mysql-logo-svgrepo-com.svg",
        level: 4,
        alt: "MySQL logo",
      },
      {
        name: "PostgreSQL",
        icon: "/postgresql-logo-svgrepo-com.svg",
        level: 3,
        alt: "PostgreSQL logo",
      },
    ],
    gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  },
  {
    category: "Version Control",
    skills: [
      {
        name: "Git",
        icon: "/git-icon-logo-svgrepo-com.svg",
        level: 4,
        alt: "Git logo",
      },
      {
        name: "GitHub",
        icon: "/src/assets/social-github-svgrepo-com.svg",
        level: 4,
        alt: "GitHub logo",
      },
    ],
    gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  },
  {
    category: "Cloud Computing",
    skills: [
      {
        name: "Azure",
        icon: "/azure-svgrepo-com.svg",
        level: 2,
        alt: "Azure logo",
      },
    ],
    gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  },
];

function SkillLevelDots({ level, max = 5 }) {
  return (
    <div
      className="flex mt-2"
      aria-label={`Skill level: ${level} out of ${max}`}
    >
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={`h-2 w-2 mx-0.5 rounded-full ${
            i < level ? "bg-green-400" : "bg-gray-400"
          }`}
        />
      ))}
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-25 px-5 max-w-8xl mx-auto">
      <h2 className="text-4xl text-center text-white mb-12">My Skills</h2>
      {skillsData.map((cat) => (
        <div key={cat.category} className="mb-10">
          <h2 className="text-3xl text-left text-white mb-5">{cat.category}</h2>
          <ul className={`w-100 grid ${cat.gridCols} gap-4`}>
            {cat.skills.map((skill) => (
              <li
                key={skill.name}
                className="bg-gray-700 p-5 rounded-lg shadow-lg flex flex-col items-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              >
                <img
                  src={skill.icon}
                  alt={skill.alt}
                  className="rounded-lg w-16 h-16 object-contain mb-2"
                  loading="lazy"
                />
                <span className="text-white mt-1">{skill.name}</span>
                <SkillLevelDots level={skill.level} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills;
