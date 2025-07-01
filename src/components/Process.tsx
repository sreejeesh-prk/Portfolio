import React from 'react';
import { Users, Layout, Palette, Code, TestTube, RotateCcw } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Users,
      number: '01',
      title: 'Empathize',
      description: 'User research, interviews, and personas',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Layout,
      number: '02',
      title: 'Structure',
      description: 'Wireframes, flows, and navigation',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Palette,
      number: '03',
      title: 'Design',
      description: 'High-fidelity UI in Figma or Adobe XD',
      color: 'text-teal-600',
      bgColor: 'bg-teal-100'
    },
    {
      icon: Code,
      number: '04',
      title: 'Develop',
      description: 'HTML, CSS/SCSS, Tailwind, Bootstrap',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: TestTube,
      number: '05',
      title: 'Prototype & Test',
      description: 'Clickable flows, usability feedback',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      icon: RotateCcw,
      number: '06',
      title: 'Iterate',
      description: 'Feedback loops & improvements',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            My Design & Development Process <span className="text-2xl">🧠</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach to creating exceptional user experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${step.bgColor} ${step.color} rounded-lg flex items-center justify-center mr-4`}>
                    <step.icon size={28} />
                  </div>
                  <div className={`text-4xl font-bold ${step.color} opacity-50`}>
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  <div className="w-0 h-0 border-l-4 border-l-purple-600 border-t-2 border-b-2 border-t-transparent border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;