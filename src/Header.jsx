import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="sticky top-0 z-10 bg-teal-700 text-white">
      <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <h1 className="text-3xl font-medium">
          <a href="#hero">🚀 Acme Rockets</a>
        </h1>
        <div>
          <button
            id="hamburger-button"
            onClick={toggleMobileMenu}
            className={`relative h-8 w-8 cursor-pointer text-3xl focus:outline-none md:hidden ${
              isMobileMenuOpen ? "toggle-btn" : ""
            }`}
          >
            <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"></div>
          </button>
          <nav className="hidden space-x-8 text-xl md:block" aria-label="main">
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
        className={`top-68 absolute w-full origin-top animate-open-menu flex-col justify-center bg-black text-5xl text-white ${
          isMobileMenuOpen ? "flex" : "hidden"
        }`}
      >
        <nav
          className="flex min-h-screen flex-col items-center py-8"
          aria-label="mobile"
        >
          <a
            href="#hero"
            className="w-full py-6 text-center hover:opacity-90"
            onClick={toggleMobileMenu}
          >
            HOME
          </a>
          <a
            href="#rockets"
            className="w-full py-6 text-center hover:opacity-90"
            onClick={toggleMobileMenu}
          >
            ROCKETS
          </a>
          <a
            href="#testimonials"
            className="w-full py-6 text-center hover:opacity-90"
            onClick={toggleMobileMenu}
          >
            TESTIMONIALS
          </a>
          <a
            href="#contact"
            className="w-full py-6 text-center hover:opacity-90"
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
