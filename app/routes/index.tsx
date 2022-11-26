import { useState } from "react";
import Nav from "~/components/Nav";
import AboutMe from "~/sections/AboutMe";
import Projects from "~/sections/Projects";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white dark:bg-black px-5 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <Nav />
          <AboutMe />
        </section>
        <Projects />
      </main>
    </div>
  );
};

export default Index;
