import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary-100/20 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary-100/20 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-6 relative">
        {/* Top section with logo and social links */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 sm:gap-4 mb-8 sm:mb-4">
          {/* Logo and social links */}
          <div className="flex flex-col items-center gap-4 sm:gap-2">
            <img
              src="https://cdn.accelonline.io/5xS9ywHMUUmfhuqWy0a_Mg/images/4FX1ZiCwuUaOvfM2LMcWdA.png"
              alt="Нутриклиника"
              className="h-12 w-auto"
            />
            <div className="flex gap-6">
              <a
                href="https://vk.com/nutriclinica"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 transition-colors text-sm font-medium"
              >
                VK
              </a>
              <a
                href="https://t.me/nutriclinica"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 transition-colors text-sm font-medium"
              >
                Telegram
              </a>
            </div>
          </div>

          {/* Addresses */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-12">
            {/* First address */}
            <div className="flex flex-col items-center sm:items-start gap-2">
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin size={16} className="text-primary-500" />
                <span className="text-sm">г. Самара, ул.Ново-Садовая, 164</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Phone size={16} className="text-primary-500" />
                <a href="tel:89370643055" className="hover:text-primary-600 transition-colors text-sm">
                  8 (937) 064 30 55
                </a>
              </div>
            </div>

            {/* Second address */}
            <div className="flex flex-col items-center sm:items-start gap-2">
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin size={16} className="text-primary-500" />
                <span className="text-sm">г. Самара, ул.Ташкентская, 165</span>
              </div>
              <div className="flex flex-col items-center sm:items-start gap-1">
                <div className="flex items-center gap-2 text-gray-700">
                  <Phone size={16} className="text-primary-500" />
                  <a href="tel:89277284311" className="hover:text-primary-600 transition-colors text-sm">
                    8 (927) 728 43 11
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Phone size={16} className="text-primary-500" />
                  <a href="tel:88463780003" className="hover:text-primary-600 transition-colors text-sm">
                    8 (846) 378 00 03
                  </a>
                </div>
                <span className="text-xs text-gray-500">(справочный центр)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500 pt-4 border-t border-gray-200">
          <div>©2022- 2023. Все права защищены.</div>
          <a href="/privacy" className="hover:text-primary-600 transition-colors">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;