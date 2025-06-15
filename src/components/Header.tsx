import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import Logo from "../assets/rekora-logo-light.png";
import { Menu, X, ArrowUp, Search, User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="bg-rekora-dark-blue font-body">
        <header
          className={`sticky top-0 z-50 transition-all duration-300 ${
            scrolled ? "glassmorphism py-3 shadow-soft" : "bg-transparent py-5"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-16">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img src={Logo} alt="" className="w-20 sm:w-24 md:w-28 h-auto" />
              </div>

              <nav className="hidden lg:flex space-x-8">
                <Link
                  to="/"
                  className="text-white hover:text-brand-pink transition-colors relative group"
                >
                  Home{" "}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-pink transition-all group-hover:w-full"></span>
                </Link>
                <Link
                  to="/about"
                  className="text-white hover:text-brand-pink transition-colors relative group"
                >
                  About Us{" "}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-pink transition-all group-hover:w-full"></span>
                </Link>
                <Link
                  to="/programs"
                  className="text-white hover:text-brand-pink transition-colors relative group"
                >
                  Programs{" "}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-pink transition-all group-hover:w-full"></span>
                </Link>

                <Link to="/resources" className="text-white hover:text-brand-pink transition-colors relative group">
                  Resources
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-pink transition-all group-hover:w-full"></span>
                </Link>

                <Link
                  to="/gallery"
                  className="text-white hover:text-brand-pink transition-colors relative group"
                >
                  Gallery{" "}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-pink transition-all group-hover:w-full"></span>
                </Link>
              </nav>

              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2">
                  <Link
                    to="/search"
                    className="text-white hover:text-brand-pink transition-colors p-2 rounded-full hover:bg-brand-pink/5"
                  >
                    <Search className="h-5 w-5" />
                  </Link>
                </div>

                <Button className="bg-white text-black shadow-md hover:shadow-lg hover:bg-brand-pink/90 hover:scale-105 transition-all rounded-xl">
                  <a href="#register">Get Involved</a>
                </Button>

                <button
                  className="lg:hidden text-white hover:text-brand-pink transition-colors"
                  onClick={toggleMobileMenu}
                  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                >
                  {mobileMenuOpen ? (
                    <X className="h-8 w-8" />
                  ) : (
                    <Menu className="h-8 w-8" />
                  )}
                </button>
              </div>
            </div>

            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="lg:hidden glassmorphism mt-4 rounded-2xl text-white shadow-lg border border-white/10"
                >
                  <nav className="container mx-auto px-4 flex flex-col py-4">
                    <Link
                      to="/"
                      className="text-white hover:text-brand-pink transition-colors py-3 border-b border-white/20"
                      onClick={toggleMobileMenu}
                    >
                      Home
                    </Link>
                    <Link
                      to="/about"
                      className="text-white hover:text-brand-pink transition-colors py-3 border-b border-white/20"
                      onClick={toggleMobileMenu}
                    >
                      About Us
                    </Link>
                    <Link
                      to="/programs"
                      className="text-white hover:text-brand-pink transition-colors py-3 border-b border-white/20"
                      onClick={toggleMobileMenu}
                    >
                      Programs
                    </Link>
                    <Link
                      to="/resources"
                      className="text-white hover:text-brand-pink transition-colors py-3 border-b border-white/20"
                      onClick={toggleMobileMenu}
                    >
                      Resources
                    </Link>
                    <Link
                      to="/gallery"
                      className="text-white hover:text-brand-pink transition-colors py-3 border-b border-white/20"
                      onClick={toggleMobileMenu}
                    >
                      Gallery
                    </Link>

                    <Button
                      className="bg-brand-pink text-white w-full mt-4 rounded-xl"
                      onClick={toggleMobileMenu}
                    >
                      <a href="#register">Get Involved</a>
                    </Button>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;