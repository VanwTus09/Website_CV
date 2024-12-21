import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky flex flex-col md:flex-row items-center w-full mx-auto font-[Poppins] p-2 mt-10 top-0 z-50">
      {/* Logo */}
      <div className="w-1/3 flex justify-center items-center">
        <img src="/logowebcv.png" alt="logo" className="w-[180px]" />
      </div>

      {/* Hamburger Menu Button for small screens */}
      <div className="w-full md:w-2/3 flex justify-end md:hidden">
        <button
          className="text-5xl p-2 focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {/* Menu Items */}
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row justify-around gap-4 md:gap-10 list-none text-xl w-full md:w-2/3`}
      >
        <li>
          <a href="#" className="hover:underline" target="blank">
            CV
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline" target="blank">
            EMAIL
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/v_tuuu514/" className="hover:underline" target="blank">
            INSTAGRAM
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/nguy%E1%BB%85n-vanw-t%C3%BA-709114292/" className="hover:underline" target="blank">
            LINKEDIN
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
