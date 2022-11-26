const Nav = () => {
  return (
    <header>
      <nav className="dark:text-white flex justify-between py-4">
        <h3 className="text-3xl font-concert uppercase">Fran Saa</h3>
        <button className="px-4 py-2 rounded-md text-white bg-violet-500 transition duration-300 hover:bg-violet-700">
          Descarga mi CV
        </button>
      </nav>
    </header>
  );
};

export default Nav;
