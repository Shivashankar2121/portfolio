import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpeg";
// import resume from "../assets/resume.pdf";
import resume from "../assets/resume.pdf";
import {
  ArrowRight,
  Download,
  Mail,
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#050B18] pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cyan-400 text-xl mb-3">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Shivashankar
              <span className="text-cyan-400"> R K</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mt-6">
              Full Stack Web Developer
            </h2>

            <p className="text-slate-400 leading-8 mt-8 max-w-xl">
              Passionate Full Stack Web Developer skilled in React,
              JavaScript, Django, AWS and REST APIs.
              I build responsive, scalable and user-friendly web
              applications with clean UI and optimized performance.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="#contact"
                className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 transition px-7 py-4 rounded-full font-semibold"
              >
                Contact Me
                <ArrowRight size={18} />
              </a>

             <a
            href={resume}
            download="resume.pdf"
            className="flex items-center gap-2 border border-cyan-400 hover:bg-cyan-400 hover:text-black transition px-7 py-4 rounded-full font-semibold"
>
  <Download size={18} />
  Resume
</a>




            </div>

            <div className="flex gap-6 mt-10">

              <a href="#">
                {/* <GithubIcon
  className="hover:text-cyan-400 transition"
  size={28}
/>
              </a>

              <a href="#">
                <Linkedin
                  className="hover:text-cyan-400 transition"
                  size={28}
                /> */}
              </a>

              <a href="#">
                <Mail
                  className="hover:text-cyan-400 transition"
                  size={28}
                />
              </a>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30"></div>

              <img
  src={profileImage}
  alt="Profile"
  className="relative w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full object-cover border-4 border-cyan-400 shadow-2xl"
/>

            </div>

          </motion.div>

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-24">

          <div className="bg-[#0B1528] rounded-2xl p-8 text-center">
            <h2 className="text-4xl font-bold text-cyan-400">3+</h2>
            <p className="text-slate-400 mt-3">
              Projects
            </p>
          </div>

          <div className="bg-[#0B1528] rounded-2xl p-8 text-center">
            <h2 className="text-4xl font-bold text-cyan-400">1+</h2>
            <p className="text-slate-400 mt-3">
              Internship
            </p>
          </div>

          <div className="bg-[#0B1528] rounded-2xl p-8 text-center">
            <h2 className="text-4xl font-bold text-cyan-400">15+</h2>
            <p className="text-slate-400 mt-3">
              Technologies
            </p>
          </div>

          <div className="bg-[#0B1528] rounded-2xl p-8 text-center">
            <h2 className="text-4xl font-bold text-cyan-400">
              AWS
            </h2>
            <p className="text-slate-400 mt-3">
              Cloud
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
