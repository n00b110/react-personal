import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="text-white fixed w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">Immanuel</h1>
          </div>
          <div className="md:flex space-x-4">
            <a href="#about" className="text-gray-300 hover:text-white">
              About
            </a>
            <Link to="/projects">
                Projects
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-white">
              Blog
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">Menu</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
