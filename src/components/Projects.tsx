import React from 'react';
import { ExternalLink, Activity, Building, Heart, Shield, GraduationCap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: Activity,
      title: 'Crick App – Multi-role Sports Dashboard',
      description: 'A responsive platform built for cricket tournament organizers, players, and viewers. Includes role-based dashboards, live match widgets, and real-time updates.',
      tools: ['Figma', 'Tailwind CSS', 'Firebase', 'Lottie'],
      highlights: [
        'Real-time match views',
        'Dynamic user dashboards (organizer, player, admin)',
        'Fully responsive across devices'
      ],
      color: 'from-green-500 to-blue-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: Building,
      title: 'Casagrand – Customer Delight Platform',
      description: 'Designed and built an internal portal for Casagrand to manage customer satisfaction, feedback tracking, and resolution workflows.',
      tools: ['Figma', 'Bootstrap', 'SCSS'],
      highlights: [
        'Feedback ticket UI with escalation flow',
        'Admin dashboard with action tracking',
        'Modular, clean interface'
      ],
      color: 'from-blue-500 to-purple-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Heart,
      title: 'Pamco Janaushadi – Pharmacy Network',
      description: 'Created UI for a centralized pharmacy network platform, focusing on accessibility and functionality for government-run medical services.',
      tools: ['Figma', 'Tailwind CSS', 'Webflow', 'Lottie'],
      highlights: [
        'Medicine stock management dashboard',
        'Pharmacy staff UI with clean data tables',
        'Lottie-powered instructional visuals'
      ],
      color: 'from-teal-500 to-green-500',
      bgColor: 'bg-teal-50'
    },
    {
      icon: Shield,
      title: 'Health Insurance Platform',
      description: 'Designed and prototyped an insurance claims and policy management UI. Users can view their insurance details, submit claims, and track status updates.',
      tools: ['Figma', 'Adobe XD'],
      highlights: [
        'Step-based claim submission flow',
        'Document upload UX',
        'Responsive for mobile-first access'
      ],
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50'
    },
    {
      icon: GraduationCap,
      title: 'School Management System',
      description: 'A web-based dashboard interface for schools, tailored for admin, teacher, and parent roles. Includes attendance, reports, notifications, and schedules.',
      tools: ['Figma', 'Adobe XD', 'Lottie'],
      highlights: [
        'Color-coded role-based UI',
        'Calendar, timetable, and performance modules',
        'Mobile-friendly designs'
      ],
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects <span className="text-2xl">🧩</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world projects that showcase my design thinking and technical execution
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className={`${project.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300`}>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center mr-4`}>
                      <project.icon className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tools.map((tool, toolIndex) => (
                          <span key={toolIndex} className="px-3 py-1 bg-white text-gray-700 text-sm font-medium rounded-full">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${project.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105`}>
                    <span className="mr-2">🔗</span>
                    View Project
                    <ExternalLink className="ml-2" size={18} />
                  </button>
                </div>

                <div className="relative">
                  <div className={`w-full h-64 bg-gradient-to-br ${project.color} rounded-lg opacity-20 flex items-center justify-center`}>
                    <project.icon size={80} className="text-gray-400" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;