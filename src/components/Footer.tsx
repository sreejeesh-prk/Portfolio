import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Sreejeesh
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              UI/UX Designer & Frontend Developer crafting exceptional digital experiences 
              with passion for clean design and functional code.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-center text-gray-400 space-y-2 sm:space-y-0 sm:space-x-2">
              <span>© 2025 Sreejeesh – UI/UX Designer & Frontend Developer</span>
            </div>
            
            <div className="flex items-center justify-center text-gray-400 mt-4">
              <span>Designed with</span>
              <Heart className="mx-2 text-red-500" size={16} fill="currentColor" />
              <span>using Figma and Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;