import React from 'react';
import { Building2, GraduationCap, Activity, ShoppingBag, Heart } from 'lucide-react';

const About = () => {
  const domains = [
    { icon: Heart, label: 'Insurance & Healthcare Platforms', color: 'text-red-600' },
    { icon: GraduationCap, label: 'School Management Systems', color: 'text-blue-600' },
    { icon: Activity, label: 'Sports Tech Dashboards', color: 'text-green-600' },
    { icon: ShoppingBag, label: 'Customer Engagement Portals', color: 'text-purple-600' },
    { icon: Building2, label: 'Government-backed Pharmacy Services', color: 'text-teal-600' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me <span className="text-2xl">🙋‍♂️</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              I'm a multidisciplinary UI/UX designer and frontend developer with a passion for solving 
              real-world problems through human-centered design and clean, scalable code. I specialize 
              in building modern, user-centric products across various domains.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Whether it's a pixel-perfect UI or responsive HTML/CSS layout, I make sure every interaction 
              delivers a delightful and functional experience.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">My Focus Areas</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">User Experience Design</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Frontend Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Responsive Design</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Design Systems</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Domains I Work With</h3>
            <div className="space-y-4">
              {domains.map((domain, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <domain.icon className={`${domain.color} mr-4 flex-shrink-0`} size={24} />
                  <span className="text-gray-700 font-medium">{domain.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;