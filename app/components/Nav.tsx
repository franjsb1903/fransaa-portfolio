import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Nav = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}) => {
  const onChangeDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("dm-fsportfolio", darkMode ? "light" : "dark");
  };

  return (
    <header>
      <nav className="dark:text-white flex justify-between py-4">
        <h3 className="text-3xl font-concert uppercase">Fran Saa</h3>
        <div className="flex justify-between items-center gap-5 md:gap-10">
          <div className="bg-gray-200 dark:bg-gray-200/[.3] p-2 rounded-md">
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
          <button className="px-4 py-2 rounded-md text-white bg-violet-500 transition duration-300 hover:bg-violet-700">
            Mi CV
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
