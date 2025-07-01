import React from 'react';
import { Search, Layout, Palette, Code, Smartphone, Settings, Globe, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'UX Research & Persona Mapping',
      description: 'User interviews, surveys, and persona development to understand your audience',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Layout,
      title: 'Wireframing & User Flows',
      description: 'Information architecture and user journey mapping for optimal experiences',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Palette,
      title: 'High-Fidelity UI Design',
      description: 'Pixel-perfect interfaces with modern design principles and brand consistency',
      color: 'bg-teal-100 text-teal-600'
    },
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Clean, semantic HTML/CSS/SCSS code that brings designs to life',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile-Responsive UI',
      description: 'Designs that work flawlessly across all devices and screen sizes',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Settings,
      title: 'Design Systems & Dev Handoff',
      description: 'Comprehensive style guides and developer-ready specifications',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Globe,
      title: 'No-code Website Creation',
      description: 'Professional websites using Webflow, WordPress, and other platforms',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      icon: Zap,
      title: 'Lottie Animation Integration',
      description: 'Engaging micro-interactions and animations to enhance user experience',
      color: 'bg-pink-100 text-pink-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What I Do <span className="text-2xl">💼</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From research to development, I handle every aspect of creating exceptional digital experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;