import { useTheme } from "@/context/ThemeContext";

const Skills = () => {
  const { theme } = useTheme();

  const skills = [
    { title: "TypeScript", icon: "ts" },
    { title: "Python", icon: "python" },
    { title: "Django", icon: "django" },
    { title: "Flask", icon: "flask" },
    { title: "Node", icon: "nodejs" },
    { title: "React", icon: "react" },
    { title: "Redux", icon: "redux" },
    { title: "TailwindCSS", icon: "tailwindcss" },
    { title: "PostgreSQL", icon: "postgresql" },
    { title: "MongoDB", icon: "mongo" },
    { title: "Git", icon: "git" },
    { title: "Vercel", icon: "vercel" },
    { title: "Firebase", icon: "firebase" },
    { title: "Postman", icon: "postman" },
    { title: "Figma", icon: "figma" },
  ];

  return (
    <section className="section-bg">
      <div className="wrapper">
        <div className="section-spacing">
          <div className="space-y-1.5">
            <h2 className="section-title">skills</h2>
            <br />
            <p className="section-subtitle">Technologies & Tools</p>
          </div>
          <div className="flex items-center flex-wrap gap-y-3.5 gap-x-3">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="shadow-sm py-2 px-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 flex items-center gap-x-2"
              >
                <img
                  src={`https://skillicons.dev/icons?i=${skill.icon}&theme=${theme}`}
                  alt={`${skill.title} icon`}
                  className="shadow-sm border-2 dark:border-slate-700 rounded-xl size-11"
                />
                <span className="text-slate-700 font-montserrat dark:text-slate-300 font-medium">
                  {skill.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
