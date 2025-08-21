function Navbar(){
    return (
      <nav>
        <ul className="list-none m-0 p-0 overflow-hidden bg-black">
          <li className="inline float-left">
            <a
              className="block py-3.5 px-5 text-white no-underline transition-colors duration-300 hover:bg-gray-800"
              href="default.asp"
            >
              Introduction
            </a>
          </li>
          <li className="inline float-left">
            <a
              className="block py-3.5 px-5 text-white no-underline transition-colors duration-300 hover:bg-gray-800"
              href="contact.asp"
            >
              Contact
            </a>
          </li>
          <li className="inline float-left">
            <a
              className="block py-3.5 px-5 text-white no-underline transition-colors duration-300 hover:bg-gray-800"
              href="about.asp"
            >
              About
            </a>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar
