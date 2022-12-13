import { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Header = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}) => {
  const [sticky, setSticky] = useState(true);

  const onChangeDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("dm-fsportfolio", darkMode ? "light" : "dark");
  };

  const onChangeToSticky = () => setTimeout(() => setSticky(true), 100);

  return (
    <header
      className={`dark:bg-black bg-white text-black dark:text-white font-lato   ${
        sticky ? "sticky top-[0.01px] mt-0" : ""
      }`}
    >
      <nav
        className="py-[40px] px-0 grid justify-between items-center nav my-0 mx-auto w-[90%] max-w-[1200px] overflow-hidden"
        id="nav"
      >
        <h3 className="text-3xl font-concert uppercase z-[1]">Fran Saa</h3>
        <ul className="nav__links items-center bg-white dark:bg-black">
          <li className="nav__item">
            <a
              href="#me"
              onClick={onChangeToSticky}
              className="nav__link font-bold text-black dark:text-white"
            >
              Sobre Mi
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#projects"
              onClick={onChangeToSticky}
              className="nav__link font-bold text-black dark:text-white"
            >
              Proyectos
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#background"
              onClick={onChangeToSticky}
              className="nav__link font-bold text-black dark:text-white"
            >
              Mi Background
            </a>
          </li>
          <div className="bg-gray-200 dark:bg-gray-200/[.3] p-2 rounded-md w-[40px] h-[40px]">
            {darkMode ? (
              <BsFillSunFill
                className="cursor-pointer text-2xl text-yellow-400"
                onClick={onChangeDarkMode}
              />
            ) : (
              <BsFillMoonStarsFill
                className="cursor-pointer text-2xl "
                onClick={onChangeDarkMode}
              />
            )}
          </div>
        </ul>

        <a
          href="#nav"
          className="nav__hamburguer"
          onClick={() => setSticky(false)}
        >
          <GiHamburgerMenu className="text-2xl text-black dark:text-white" />
        </a>

        <a href="#" className="nav__close" onClick={onChangeToSticky}>
          <IoCloseSharp className="text-3xl text-black dark:text-white" />
        </a>
      </nav>
    </header>
  );
};
export default Header;
