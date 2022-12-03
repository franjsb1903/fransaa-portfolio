import Links from "~/components/Links";
import Avatar from "../components/Avatar";

const AboutMe = () => {
  return (
    <div className="mt-10 flex flex-col items-center cursor-default">
      <h2 className="text-2xl font-bold md:text-4xl text-black dark:text-white">
        Francisco Javier Saa Besteiro
      </h2>
      <h4 className="text-lg md:text-2xl text-gray-500 mt-4">
        Ingeniero Informático | FullStack Engineer
      </h4>
      <Avatar />
      <p className="my-10 px-3 md:px-0 text-lg md:text-xl md:max-w-xl text-center text-gray-700 dark:text-gray-500">
        ¡Hola 👋🏼! Soy un FullStack Engineer graduado en Ingeniería Informática.
        Me considero una persona muy proactiva con muchas ganas de aprender y
        crecer, además de un apasionado de la tecnología. ¡Conoce más de mí en
        los siguientes enlaces!
      </p>
      <Links />
    </div>
  );
};

export default AboutMe;
