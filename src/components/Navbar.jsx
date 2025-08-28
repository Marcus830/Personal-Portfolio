function Navbar(){
    return (
      <nav>
        <ul className="list-none m-0 p-0 overflow-hidden bg-black">
          <li className="inline float-left">
            <a
              className="block py-3.5 px-5 text-white no-underline transition-colors duration-300 hover:bg-gray-800"
              href="#header"
            >
              Introduction
            </a>
          </li>
          <li className="inline float-left">
            <a
              className="block py-3.5 px-5 text-white no-underline transition-colors duration-300 hover:bg-gray-800"
              href="#about"
            >
              About
            </a>
          </li>
          <li className="inline float-left">
            <a
              className="block py-3.5 px-5 text-white no-underline transition-colors duration-300 hover:bg-gray-800"
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li className="inline float-left">
            <a
              className="block py-3.5 px-5 text-white no-underline transition-colors duration-300 hover:bg-gray-800"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li className="inline float-left">
            <a
              className="block py-3.5 px-5 text-white no-underline transition-colors duration-300 hover:bg-gray-800"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar
