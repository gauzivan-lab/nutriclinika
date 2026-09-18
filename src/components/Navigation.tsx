import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white'}`}>
      {/* Top info bar */}
      <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 py-1.5 sm:py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm text-gray-600">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-1.5 hover:text-primary-600 transition-colors">
                <MapPin size={14} className="text-primary-500" />
                <span className="text-xs sm:text-sm">Самара, Ново-Садовая 164г</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 sm:gap-8">
              <a href="tel:83472015105" className="flex items-center gap-1.5 hover:text-primary-600 transition-colors group">
                <Phone size={14} className="text-primary-500 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-xs sm:text-sm">8 (937) 064 30 55</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 sm:py-4">
          <img 
            src="https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/4FX1ZiCwuUaOvfM2LMcWdA.png" 
            alt="Нутриклиника логотип" 
            className="w-24 sm:w-48 h-auto"
          />
          
          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 text-gray-600 hover:text-primary-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#about" className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all">О клинике</a>
            <a href="#services" className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all">Услуги</a>
            <button 
              onClick={() => handleScroll('services')} 
              className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all"
            >
              Цены
            </button>
            <a href="#doctors" className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all">Врачи</a>
            <a href="#blog" className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all">Блог</a>
            <a href="#reviews" className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all">Отзывы</a>
            <a href="#contact" className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all">Контакты</a>
            <a href="#promotions" className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all">Акции</a>
          </div>

          {/* Mobile menu */}
          <div 
            className={`lg:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-50 transform transition-transform duration-300 ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center mb-6">
                <img 
                  src="https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/4FX1ZiCwuUaOvfM2LMcWdA.png" 
                  alt="Нутриклиника логотип" 
                  className="w-24 h-auto"
                />
                <button 
                  className="p-2 text-gray-600 hover:text-primary-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                <a 
                  href="#about" 
                  className="text-xl text-gray-700 hover:text-primary-500 transition-colors border-b border-gray-100 pb-4" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  О клинике
                </a>
                <a 
                  href="#services" 
                  className="text-xl text-gray-700 hover:text-primary-500 transition-colors border-b border-gray-100 pb-4" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Услуги
                </a>
                <button 
                  onClick={() => handleScroll('services')} 
                  className="text-left text-xl text-gray-700 hover:text-primary-500 transition-colors border-b border-gray-100 pb-4"
                >
                  Цены
                </button>
                <a 
                  href="#doctors" 
                  className="text-xl text-gray-700 hover:text-primary-500 transition-colors border-b border-gray-100 pb-4" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Врачи
                </a>
                <a 
                  href="#blog" 
                  className="text-xl text-gray-700 hover:text-primary-500 transition-colors border-b border-gray-100 pb-4" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Блог
                </a>
                <a 
                  href="#reviews" 
                  className="text-xl text-gray-700 hover:text-primary-500 transition-colors border-b border-gray-100 pb-4" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Отзывы
                </a>
                <a 
                  href="#contact" 
                  className="text-xl text-gray-700 hover:text-primary-500 transition-colors border-b border-gray-100 pb-4" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Контакты
                </a>
                <a 
                  href="#promotions" 
                  className="text-xl text-gray-700 hover:text-primary-500 transition-colors" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Акции
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;