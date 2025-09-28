import React from "react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { Menu, X, Code2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "./Router";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      className="bg-background/95 border-b border-muted sticky top-0 z-50 backdrop-blur-xl"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => handleNavigation("/")}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          
          <span className="text-xl font-bold text-primary-light">
            Omega'sDev
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.label}
              onClick={() => handleNavigation(item.path)}
              className="text-muted hover:text-primary-light transition-colors duration-200 font-medium relative group"
              whileHover={{ y: -1 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.label}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-blue group-hover:w-full transition-all duration-200" />
            </motion.button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-muted hover:text-primary-light p-2 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Button 
            onClick={() => handleNavigation("/contact")}
            className="btn-primary px-6 py-2 rounded-lg"
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-card border-t border-muted"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.path)}
                className="block w-full text-left text-muted hover:text-primary-light transition-colors py-2 font-medium"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4">
              <Button 
                onClick={() => handleNavigation("/contact")}
                className="btn-primary px-6 py-2 rounded-lg w-full"
              >
                Get Started
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}