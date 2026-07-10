import { motion } from "framer-motion";
import {
  ExternalLink,
  Code2,
  Cloud,
  UtensilsCrossed,
} from "lucide-react";

const projects = [
  {
    title: " Real Estate Website",
    icon: <Code2 size={32} />,
    description:
      "A responsive premium real estate website built with React.js, featuring luxury property listings, smooth animations, responsive design, interactive search, properties.",

    technologies: [
      'Redux',
      "React",
      "JavaScript",
      "CSS",
      "Responsive UI",
    ],

    github: "https://github.com/Shivashankar2121/LuxeNext",
    demo: "https://luxe-next.vercel.app/",
  },

  {
    title: "Spicy Bites",
    icon: <UtensilsCrossed size={32} />,
    description:
      "A modern food ordering web application with responsive UI, cart functionality, routing, authentication screens, admin dashboard, order tracking, and premium user experience.",

    technologies: [
      "React",
      "React Router",
      "JavaScript",
      "Tailwind CSS",
      "CRUD",
    ],

    github: "https://github.com/Shivashankar2121/spicy-bites",
    demo: "https://spicy-bites-rose.vercel.app/",
  },

  {
    title: "Secure Multi-VPC Backup System",
    icon: <Cloud size={32} />,
    description:
      "Designed and deployed a secure AWS backup architecture using EC2, VPC Peering, Linux, rsync, cron jobs, and shell scripting to automate backups across multiple VPCs.",

    technologies: [
      "AWS",
      "Linux",
      "Shell Script",
      "EC2",
      "VPC",
      "Cron",
    ],

    // github: "#",
    // demo: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
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
            Portfolio
          </p>

          <h2 className="text-5xl font-bold text-center mt-3 mb-16">
            Featured Projects
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">

            {projects.map((project, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className="bg-[#0B1528] rounded-3xl border border-slate-700 hover:border-cyan-400 transition duration-300 overflow-hidden"
              >

                <div className="p-8">

                  <div className="w-16 h-16 rounded-2xl bg-cyan-500 flex items-center justify-center mb-6">
                    {project.icon}
                  </div>

                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 leading-8 mt-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-8">

                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-slate-800 px-4 py-2 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                  <div className="flex gap-4 mt-10">

                    <a
  href={project.github}
  target="_blank"
  rel="noreferrer"
  className="px-5 py-3 rounded-full bg-slate-800 hover:bg-cyan-500 transition"
>
  Source Code
</a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 transition"
                    >
                      <ExternalLink size={18} />
                      Live
                    </a>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Projects;