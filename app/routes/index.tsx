import { useState } from "react";
import Nav from "~/components/Nav";
import TitleSection from "~/components/TitleSection";
import AboutMe from "~/sections/AboutMe";
import Projects from "~/sections/Projects";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white dark:bg-black ">
        <section className="min-h-screen px-5 md:px-20 lg:px-40">
          <Nav />
          <AboutMe />
        </section>
        <section className="px-2 md:px-20 mt-5">
          <TitleSection>Mis Proyectos</TitleSection>
          <Projects />
        </section>
      </main>
    </div>
  );
};

export default Index;
