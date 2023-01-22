import { useEffect, useState } from "react";
import TitleSection from "~/components/TitleSection";
import Header from "~/components/Header";
import AboutMe from "~/sections/AboutMe";
import Projects from "~/sections/Projects";
import Background from "~/sections/Background";
import { getProjects } from "~/services/projects.server";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  const projects = await getProjects();

  return { projects };
}

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { projects } = useLoaderData();

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("dm-fsportfolio");
    setDarkMode(savedDarkMode === "dark");
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white dark:bg-black ">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <section id="me" className="min-h-screen px-5 md:px-20 lg:px-40">
          <AboutMe />
        </section>
        <section id="projects" className="px-2 md:px-20 mt-5">
          <TitleSection>Mis Proyectos</TitleSection>
          <Projects projects={projects} />
        </section>
        <section id="background" className="px-2 md:px-20 mt-5">
          <TitleSection>Mi background</TitleSection>
          <Background />
        </section>
      </main>
    </div>
  );
};

export default Index;
