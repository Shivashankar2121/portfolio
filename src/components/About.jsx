import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#08101f] flex items-center py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 uppercase tracking-widest mb-2">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Know More About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-14">

            <div>
              <p className="text-slate-300 leading-9 text-lg">
                I'm <span className="text-cyan-400 font-semibold">Shivashankar R K</span>,
                a passionate Full Stack Web Developer specializing in React,
                JavaScript, Django, AWS, REST APIs and SQL.

                I enjoy building modern, responsive and scalable web
                applications with clean UI and optimized performance.

                My goal is to create applications that provide excellent
                user experiences while maintaining clean architecture and
                efficient backend systems.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-[#0B1528] rounded-2xl p-6">
                <h3 className="text-cyan-400 text-xl font-bold">
                  Frontend
                </h3>

                <p className="text-slate-400 mt-3">
                  React
                  <br />
                  JavaScript
                  <br />
                  HTML
                  <br />
                  CSS
                </p>
              </div>

              <div className="bg-[#0B1528] rounded-2xl p-6">
                <h3 className="text-cyan-400 text-xl font-bold">
                  Backend
                </h3>

                <p className="text-slate-400 mt-3">
                  Python
                  <br />
                  Django
                  <br />
                  REST API
                  <br />
                  SQL
                </p>
              </div>

              <div className="bg-[#0B1528] rounded-2xl p-6">
                <h3 className="text-cyan-400 text-xl font-bold">
                  Cloud
                </h3>

                <p className="text-slate-400 mt-3">
                  AWS
                  <br />
                  EC2
                  <br />
                  Linux
                  <br />
                  Git
                </p>
              </div>

              <div className="bg-[#0B1528] rounded-2xl p-6">
                <h3 className="text-cyan-400 text-xl font-bold">
                  Soft Skills
                </h3>

                <p className="text-slate-400 mt-3">
                  Teamwork
                  <br />
                  Problem Solving
                  <br />
                  Communication
                  <br />
                  Leadership
                </p>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;