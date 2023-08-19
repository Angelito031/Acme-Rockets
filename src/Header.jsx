import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="bg-teal-700 text-white sticky top-0 z-10">
      <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-medium">
          <a href="#hero">🚀 Acme Rockets</a>
        </h1>
        <div>
          <button
            id="hamburger-button"
            onClick={toggleMobileMenu}
            className={`text-3xl md:hidden focus:outline-none cursor-pointer relative w-8 h-8 ${
              isMobileMenuOpen ? "toggle-btn" : ""
            }`}
          >
            <div className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500"></div>
          </button>
          <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
            <a href="#rockets" className="hover:opacity-90">
              Our Rockets
            </a>
            <a href="#testimonials" className="hover:opacity-90">
              Testimonials
            </a>
            <a href="#contact" className="hover:opacity-90">
              Contact
            </a>
          </nav>
        </div>
      </section>
      <section
        id="mobile-menu"
        className={`absolute top-68 bg-black w-full text-white text-5xl flex-col justify-center origin-top animate-open-menu ${
          isMobileMenuOpen ? "flex" : "hidden"
        }`}
      >
        <nav
          className="flex flex-col min-h-screen items-center py-8"
          aria-label="mobile"
        >
          <a
            href="#hero"
            className="w-full text-center py-6 hover:opacity-90"
            onClick={toggleMobileMenu}
          >
            HOME
          </a>
          <a
            href="#rockets"
            className="w-full text-center py-6 hover:opacity-90"
            onClick={toggleMobileMenu}
          >
            ROCKETS
          </a>
          <a
            href="#testimonials"
            className="w-full text-center py-6 hover:opacity-90"
            onClick={toggleMobileMenu}
          >
            TESTIMONIALS
          </a>
          <a
            href="#contact"
            className="w-full text-center py-6 hover:opacity-90"
            onClick={toggleMobileMenu}
          >
            CONTACT
          </a>
        </nav>
      </section>
    </header>
  );
};

export default Header;
