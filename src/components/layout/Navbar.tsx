import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Services", href: "/#services" },
  { name: "Clients", href: "/#clients" },
  { name: "Philosophy", href: "/#philosophy" },
  { name: "Internships", href: "/#internships" },
  { name: "Contact", href: "/#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      // Small timeout to allow navigation to complete before scrolling
      setTimeout(() => {
        const element = document.querySelector(href.replace('/', ''));
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass-card py-3" : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <img src="/website-logo.png" alt="Manyathy Logo" className="h-16 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                // If on homepage, let default anchor behavior work for smooth scroll if possible, 
                // but if separate page, we might need manual handling if standard anchor doesn't trigger router.
                // Actually, standard <a href="/#id"> works fine for full reload/nav, but for SPA feel:
                if (location.pathname !== "/") {
                  e.preventDefault();
                  handleNavClick(link.href);
                }
              }}
              className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="/#contact" onClick={(e) => {
            if (location.pathname !== "/") {
              e.preventDefault();
              handleNavClick("/#contact");
            }
          }}>
            <Button variant="hero" size="default">
              Get in Touch
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-primary/5"
                  onClick={(e) => {
                    if (location.pathname !== "/") {
                      e.preventDefault();
                      handleNavClick(link.href);
                    } else {
                      setIsMobileMenuOpen(false);
                    }
                  }}
                >
                  {link.name}
                </a>
              ))}
              <a href="/#contact" onClick={(e) => {
                if (location.pathname !== "/") {
                  e.preventDefault();
                  handleNavClick("/#contact");
                } else {
                  setIsMobileMenuOpen(false);
                }
              }}>
                <Button variant="hero" size="lg" className="mt-4 w-full">
                  Get in Touch
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
