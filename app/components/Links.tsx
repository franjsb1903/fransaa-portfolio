import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Links = () => (
  <div className="text-5xl flex gap-16 justify-center max-w-xl text-gray-500 dark:text-white">
    <a
      href="https://www.linkedin.com/in/francisco-javier-saa-besteiro/"
      target="_blank"
      rel="noreferrer"
      aria-label="Open my personal LinkedIn profile"
      className="hover:text-gray-700 dark:hover:text-violet-400 transition duration-300"
    >
      <AiFillLinkedin />
    </a>
    <a
      href="https://github.com/franjsb1903"
      target="_blank"
      rel="noreferrer"
      aria-label="Open my personal GitHub profile to see all my projects"
      className="hover:text-gray-700 dark:hover:text-violet-400 transition duration-300"
    >
      <AiFillGithub />
    </a>
  </div>
);

export default Links;
