import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="text-lg text-gray-600 mb-4 block">Hi, I'm Sreejeesh 👋</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              UI/UX Designer &{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Frontend Developer
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Crafting user-first digital experiences with clean design and performant code.
            </p>
            <div className="bg-gray-50 border-l-4 border-blue-600 p-6 my-8 max-w-3xl mx-auto">
              <p className="text-gray-700 italic text-lg">
                I design and build intuitive, responsive interfaces for web and mobile platforms—balancing 
                functionality, visual clarity, and technical performance.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="mr-2">🎨</span>
              View My Work
              <ArrowRight className="ml-2" size={20} />
            </button>
            
            <button className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
              <Download className="mr-2" size={20} />
              Download Resume
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="mr-2" size={20} />
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;