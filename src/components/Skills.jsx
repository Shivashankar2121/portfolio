import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Server,
  Laptop,
  Network,
} from "lucide-react";

const skillCategories = [
  {
    icon: <Laptop size={28} />,
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design"],
  },
  {
    icon: <Server size={28} />,
    title: "Backend",
    skills: ["Python", "Django", "REST API"],
  },
  {
    icon: <Database size={28} />,
    title: "Database",
    skills: ["SQL", "CRUD Operations"],
  },
  {
    icon: <Cloud size={28} />,
    title: "Cloud",
    skills: ["AWS EC2", "VPC", "Linux", "Shell Scripting"],
  },
  {
    icon: <Network size={28} />,
    title: "Networking",
    skills: ["TCP/IP", "Subnetting", "Routing", "Security Groups"],
  },
  {
    icon: <Code2 size={28} />,
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Excel"],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#050B18] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-cyan-400 uppercase tracking-widest text-center">
            Skills
          </p>

          <h2 className="text-5xl font-bold text-center mt-3 mb-16">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {skillCategories.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="bg-[#0B1528] rounded-2xl p-8 border border-slate-700 hover:border-cyan-400 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-5">
                  {item.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-slate-800 text-sm hover:bg-cyan-500 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Skills;