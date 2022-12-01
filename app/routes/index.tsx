import { useState } from "react";
import Nav from "~/components/Nav";
import TitleSection from "~/components/TitleSection";
import AboutMe from "~/sections/AboutMe";
import Projects from "~/sections/Projects";
import background from "~/data/background.json";
import { formatTool } from "~/utils/tools-utils";

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
        <section className="px-2 md:px-20 mt-5">
          <TitleSection>Mi background</TitleSection>
          <div className="flex flex-row flex-wrap my-5">
            {background.tools.map((tool) => {
              const { label, Icon } = formatTool(tool);
              return (
                label &&
                Icon && (
                  <div className="flex flex-col items-center w-1/3">
                    <Icon />
                    <p className="text-xl text-black">{label}</p>
                  </div>
                )
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
