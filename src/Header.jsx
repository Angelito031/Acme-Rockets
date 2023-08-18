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
            className="text-3xl md:hidden focus:outline-none cursor-pointer"
          >
            &#9776;
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
        className={`absolute top-0 bg-black w-full text-white text-5xl flex-col justify-center origin-top animate-open-menu ${
          isMobileMenuOpen ? "flex" : "hidden"
        }`}
      >
        <button onClick={toggleMobileMenu} className="text-8xl self-end px-6">
          &times;
        </button>
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
