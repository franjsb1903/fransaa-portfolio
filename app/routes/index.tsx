import { useEffect, useState } from "react";
import Nav from "~/components/Nav";
import TitleSection from "~/components/TitleSection";
import AboutMe from "~/sections/AboutMe";
import Projects from "~/sections/Projects";
import Background from "~/sections/Background";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("dm-fsportfolio");
    setDarkMode(savedDarkMode === "dark");
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white dark:bg-black ">
        <section className="min-h-screen px-5 md:px-20 lg:px-40">
          <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
          <AboutMe />
        </section>
        <section className="px-2 md:px-20 mt-5">
          <TitleSection>Mis Proyectos</TitleSection>
          <Projects />
        </section>
        <section className="px-2 md:px-20 mt-5">
          <TitleSection>Mi background</TitleSection>
          <Background />
        </section>
      </main>
    </div>
  );
};

export default Index;
