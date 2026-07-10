import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Web Developer Intern",
    company: "TSAR Sports Private Limited",
    duration: "Jan 2026 - Jun 2026",
    description:
      "Worked on responsive web applications using React.js and Django. Developed REST APIs, integrated SQL databases, implemented CRUD operations, and collaborated with the development team to deliver scalable solutions.",
  },
  {
    title: "Web Development & Cloud Trainee",
    company: "IT Vedant",
    duration: "2025 - 2026",
    description:
      "Completed intensive training in Full Stack Development, AWS Cloud, Linux Administration, Shell Scripting, Networking, and deployment practices through hands-on projects.",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-[#08101F] py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-cyan-400 uppercase tracking-widest text-center">
            Experience
          </p>

          <h2 className="text-5xl font-bold text-center mt-3 mb-20">
            My Experience
          </h2>

          <div className="relative">

            <div className="absolute left-6 top-0 h-full w-1 bg-cyan-500"></div>

            {experiences.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="relative pl-20 mb-14"
              >

                <div className="absolute left-0 top-2 w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center">
                  <Briefcase size={22} />
                </div>

                <div className="bg-[#0B1528] rounded-2xl p-8 border border-slate-700 hover:border-cyan-400 transition">

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-cyan-400 mt-2 font-semibold">
                    {item.company}
                  </p>

                  <div className="flex items-center gap-2 mt-3 text-slate-400">
                    <Calendar size={18} />
                    {item.duration}
                  </div>

                  <p className="mt-5 text-slate-300 leading-8">
                    {item.description}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Experience;