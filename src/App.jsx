import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import MoreSections from "./components/MoreSections";

function App() {
  return (
    <div className="bg-[#050B18] text-white overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <MoreSections />
      </main>
    </div>
  );
}

export default App;