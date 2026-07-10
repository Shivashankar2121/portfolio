import { motion } from "framer-motion";
import {
  GraduationCap,
  Trophy,
  Award,
  Globe,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function MoreSections() {
  return (
    <>
      {/* Education */}
      <section id="education" className="py-24 bg-[#08101F]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-cyan-400 uppercase tracking-widest text-center">
              Education
            </p>

            <h2 className="text-5xl font-bold text-center mt-3 mb-16">
              Academic Journey
            </h2>

            <div className="space-y-8">

              <div className="bg-[#0B1528] rounded-3xl p-8 border border-slate-700">
                <div className="flex items-center gap-4">
                  <GraduationCap className="text-cyan-400" size={34} />

                  <div>
                    <h3 className="text-2xl font-bold">
                      Bachelor of Engineering
                    </h3>

                    <p className="text-cyan-400">
                      RYMEC College • 2022 - 2026
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 mt-6">
                  Computer Science & Engineering
                </p>
              </div>

              <div className="bg-[#0B1528] rounded-3xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold">
                  Pre-University College
                </h3>

                <p className="text-cyan-400 mt-2">
                  Sri Brang Basappa PU College
                </p>

                <p className="text-slate-400 mt-3">
                  Percentage : 76%
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-24 bg-[#050B18]">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-cyan-400 uppercase tracking-widest text-center">
            Achievements
          </p>

          <h2 className="text-5xl font-bold text-center mt-3 mb-16">
            Certifications & Achievements
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="bg-[#0B1528] rounded-3xl p-8">
              <Award className="text-cyan-400 mb-5" size={40} />

              <h3 className="text-2xl font-bold mb-5">
                Certifications
              </h3>

              <ul className="space-y-3 text-slate-300">
                <li>✔ Full Stack Web Development</li>
                <li>✔ Linux & Shell Scripting</li>
                <li>✔ AWS Cloud Training</li>
                <li>✔ Networking Fundamentals</li>
              </ul>
            </div>

            <div className="bg-[#0B1528] rounded-3xl p-8">
              <Trophy className="text-cyan-400 mb-5" size={40} />

              <h3 className="text-2xl font-bold mb-5">
                Sports Achievements
              </h3>

              <ul className="space-y-3 text-slate-300">
                <li>🏃 State Level 400m Runner</li>
                <li>♟ State Level Chess Player</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Languages */}
      <section id="languages" className="py-24 bg-[#08101F]">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-cyan-400 uppercase tracking-widest text-center">
            Languages
          </p>

          <h2 className="text-5xl font-bold text-center mt-3 mb-16">
            Languages Known
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">

            {[
              "English",
              "Kannada",
              "Telugu",
              "Hindi",
              "German (Learning)",
            ].map((language) => (
              <div
                key={language}
                className="bg-[#0B1528] rounded-2xl p-8 text-center hover:scale-105 transition"
              >
                <Globe className="mx-auto text-cyan-400 mb-4" size={34} />

                <h3 className="text-xl font-semibold">
                  {language}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-[#050B18]">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-cyan-400 uppercase tracking-widest text-center">
            Contact
          </p>

          <h2 className="text-5xl font-bold text-center mt-3 mb-16">
            Get In Touch
          </h2>

          <div className="grid lg:grid-cols-2 gap-10">

            <div className="bg-[#0B1528] rounded-3xl p-10 space-y-8">

              <div className="flex items-center gap-4">
                <Mail className="text-cyan-400" />
                <span>shivashankarrk2004@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-cyan-400" />
                <span>+91 7795******</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-cyan-400" />
                <span>Karnataka, India</span>
              </div>

              <div className="flex gap-4 pt-4">
  <a
    href="https://github.com/Shivashankar2121/"
    target="_blank"
    rel="noreferrer"
    className="px-5 py-3 rounded-lg bg-slate-800 hover:bg-cyan-500 transition"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/shivashankar-r-k-101a73268/"
    target="_blank"
    rel="noreferrer"
    className="px-5 py-3 rounded-lg bg-slate-800 hover:bg-cyan-500 transition"
  >
    LinkedIn
  </a>
</div>

            </div>

            <form className="bg-[#0B1528] rounded-3xl p-10 space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-slate-800 outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 rounded-xl bg-slate-800 outline-none"
              />

              <textarea
                rows="5"
                placeholder="Message"
                className="w-full p-4 rounded-xl bg-slate-800 outline-none"
              />

              <button
                className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 font-semibold transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#08101F] py-8 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

          <h2 className="text-2xl font-bold text-cyan-400">
            Shivashankar R K
          </h2>

          <p className="text-slate-400 mt-4 md:mt-0">
            © 2026 All Rights Reserved.
          </p>

        </div>
      </footer>
    </>
  );
}

export default MoreSections;