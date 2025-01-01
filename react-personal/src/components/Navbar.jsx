export default function Navbar() {
  return (
    <div className=" text-white fixed w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">Portfolio</h1>
          </div>
          <div className="md:flex space-x-4">
            <a href="#about" className="text-gray-300 hover:text-white">
              About
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white">
              Contact
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white">
              Blog
            </a>
          </div>
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">Menu</button>
          </div>
        </div>
      </div>
    </div>
  );
}
