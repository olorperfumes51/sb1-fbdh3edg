import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

interface HeaderProps {
  onHomeClick: () => void;
}

export default function Header({ onHomeClick }: HeaderProps) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleHomeClick = () => {
    navigate("/");
    setIsOpen(false);
  };

  const handleAboutUsClick = () => {
    navigate("/AboutUs");
    setIsOpen(false);
  };

  const handleContactClick = () => {
    navigate("/contact");
    setIsOpen(false);
  };

  const handleApplicationClick = () => {
    navigate("/ApplicationView");
    setIsOpen(false);
  };

  return (
    <header className="bg-emerald-950 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
          <button
            onClick={handleHomeClick}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img
              src={logo}
              alt="Olor Perfumery Logo"
              className="h-10 w-10 object-contain"
            />
            <div className="text-left">
              <h1 className="text-xl sm:text-2xl font-serif text-amber-400">
                Olor PerFumery
              </h1>
              <p className="text-[10px] sm:text-xs text-amber-400 tracking-widest">
                FRAGRANCES & FLAVOURS
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={onHomeClick}
              className="text-amber-400 hover:text-amber-500 transition-colors font-medium"
            >
              Collections
            </button>
            <button
              onClick={handleAboutUsClick}
              className="text-amber-400 hover:text-amber-500 transition-colors font-medium"
            >
              About Us
            </button>
            <button
              onClick={handleContactClick}
              className="text-amber-400 hover:text-amber-500 transition-colors font-medium"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-amber-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-emerald-950 border-t border-emerald-900">
            <div className="flex flex-col space-y-4 py-4">
              <button
                onClick={onHomeClick}
                className="text-amber-400 hover:text-amber-500 font-medium"
              >
                Collections
              </button>
              {/* Uncomment if needed */}
              {/* 
              <button
                onClick={handleApplicationClick}
                className="text-amber-400 hover:text-amber-500 font-medium"
              >
                Applications
              </button> 
              */}
              <button
                onClick={handleAboutUsClick}
                className="text-amber-400 hover:text-amber-500 font-medium"
              >
                About Us
              </button>
              <button
                onClick={handleContactClick}
                className="text-amber-400 hover:text-amber-500 font-medium"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}