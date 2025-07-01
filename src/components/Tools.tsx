import React from 'react';
import { Figma, Palette, Code, Zap } from 'lucide-react';

const Tools = () => {
  const toolCategories = [
    {
      icon: Palette,
      title: 'Design Tools',
      tools: ['Figma', 'Adobe XD', 'Photoshop'],
      color: 'text-pink-600',
      bgColor: 'bg-pink-100'
    },
    {
      icon: Code,
      title: 'Frontend Development',
      tools: ['HTML', 'CSS', 'SCSS', 'Bootstrap', 'Tailwind CSS'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Zap,
      title: 'Motion & No-Code Tools',
      tools: ['Lottie Animations', 'Webflow', 'WordPress'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Figma,
      title: 'Collaboration & Delivery',
      tools: ['Canva', 'Miro', 'GitHub'],
      color: 'text-teal-600',
      bgColor: 'bg-teal-100'
    }
  ];

  return (
    <section id="tools" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tools I Use <span className="text-2xl">🛠</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A carefully selected toolkit for design and development excellence
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {toolCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-all duration-300">
              <div className={`w-16 h-16 ${category.bgColor} ${category.color} rounded-lg flex items-center justify-center mb-6 mx-auto`}>
                <category.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 text-center mb-6">{category.title}</h3>
              
              <div className="space-y-3">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="bg-white p-3 rounded-md text-center font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;