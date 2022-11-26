import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Links = () => (
  <div className="text-5xl flex gap-16 justify-center max-w-xl text-gray-500">
    <a
      href="https://www.linkedin.com/in/francisco-javier-saa-besteiro/"
      target="_blank"
      rel="noreferrer"
    >
      <AiFillLinkedin />
    </a>
    <a href="https://github.com/franjsb1903" target="_blank" rel="noreferrer">
      <AiFillGithub />
    </a>
  </div>
);

export default Links;
