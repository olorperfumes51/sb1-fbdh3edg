import { Flower2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

interface HeaderProps {
  onHomeClick: () => void;
}

export default function Header({ onHomeClick }: HeaderProps) {
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  const handleHomeClick = () => {
    navigate('/'); // Navigate to the home page when clicked
  };
  const handleAboutUsClick = () => {
    navigate('/AboutUs'); // Navigate to the home page when clicked
  };

  const handleContactClick = () => {
    navigate('/contact'); // Navigate to the contact page when clicked
  };

  return (
    <header className="bg-emerald-950 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Make the "Olor PerFumery" clickable */}
          <button
            onClick={handleHomeClick} // Trigger navigate to home on click
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <Flower2 className="h-8 w-8 text-amber-700" />
            <div className="text-left">
              <h1 className="text-2xl font-serif text-amber-400">
                Olor PerFumery
              </h1>
              <p className="text-xs text-amber-400 tracking-widest">
                NATURAL FRAGRANCES
              </p>
            </div>
          </button>

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
              onClick={handleContactClick} // Trigger navigate to contact page on click
              className="text-amber-400 hover:text-amber-500 transition-colors font-medium"
            >
              Contact Us
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
