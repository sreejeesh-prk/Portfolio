import React, { useState } from 'react';
import { X, Smartphone, Monitor } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'mobile' | 'web'>('mobile');

  const mobileDesigns = [
    {
      id: 1,
      title: 'Crick App - Live Match Scorecard',
      image: '/cricket-app-screenshots/Media (22).jfif',
      description: 'Real-time cricket match scorecard with live scores, player statistics, and ball-by-ball commentary'
    },
    {
      id: 2,
      title: 'Crick App - Tournament Organizer Dashboard',
      image: '/cricket-app-screenshots/Media (16).jfif',
      description: 'Comprehensive dashboard for tournament organizers with team management, ground booking, and revenue analytics'
    },
    {
      id: 3,
      title: 'Crick App - Grounds Management',
      image: '/cricket-app-screenshots/Media (19).jfif',
      description: 'Ground listing and booking interface with availability status and venue details'
    },
    {
      id: 4,
      title: 'Crick App - Tournament Management',
      image: '/cricket-app-screenshots/Media (18).jfif',
      description: 'Tournament creation and management interface with team approvals, official requests, and calendar integration'
    },
    {
      id: 5,
      title: 'Crick App - Login & Authentication',
      image: '/cricket-app-screenshots/Media (21).jfif',
      description: 'Secure login interface with TouchID support, social authentication, and user-friendly onboarding'
    },
    {
      id: 6,
      title: 'Healthcare Mobile App',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Mobile insurance claims and policy management interface'
    },
    {
      id: 7,
      title: 'School Management Mobile',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Mobile app for students, teachers and parents'
    },
    {
      id: 8,
      title: 'Pharmacy Mobile Portal',
      image: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Mobile pharmacy management and medicine tracking'
    }
  ];

  const webDesigns = [
    {
      id: 9,
      title: 'Crick App Web Dashboard',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Comprehensive web dashboard for tournament organizers and administrators'
    },
    {
      id: 10,
      title: 'Healthcare Web Platform',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Full-featured web platform for insurance management'
    },
    {
      id: 11,
      title: 'School Management Web Portal',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Complete web-based school management system'
    },
    {
      id: 12,
      title: 'Pharmacy Network Web Portal',
      image: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Government-backed pharmacy network management system'
    },
    {
      id: 13,
      title: 'Customer Engagement Web Platform',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Enterprise customer satisfaction and feedback tracking portal'
    },
    {
      id: 14,
      title: 'E-commerce Web Platform',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Full-featured e-commerce platform with admin dashboard'
    },
    {
      id: 15,
      title: 'Analytics Web Dashboard',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Data visualization dashboard with real-time analytics'
    },
    {
      id: 16,
      title: 'Corporate Website Design',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Modern corporate website with responsive design'
    }
  ];

  const currentDesigns = activeTab === 'mobile' ? mobileDesigns : webDesigns;

  const openModal = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % currentDesigns.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? currentDesigns.length - 1 : selectedImage - 1);
    }
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Design Gallery <span className="text-2xl">🎨</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A visual showcase of my mobile and web design work
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-2 shadow-md">
            <button
              onClick={() => setActiveTab('mobile')}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'mobile'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Smartphone className="mr-2" size={20} />
              Mobile Design
            </button>
            <button
              onClick={() => setActiveTab('web')}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ml-2 ${
                activeTab === 'web'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Monitor className="mr-2" size={20} />
              Web Design
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className={`grid gap-6 ${
          activeTab === 'mobile' 
            ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6' 
            : 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
        }`}>
          {currentDesigns.map((design, index) => (
            <div
              key={design.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className={`relative overflow-hidden ${
                activeTab === 'mobile' ? 'aspect-[9/16]' : 'aspect-[4/3]'
              }`}>
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 text-gray-900 px-4 py-2 rounded-full font-medium shadow-lg">
                    View Design
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2">{design.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">{design.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeModal}
          >
            <div className="relative max-w-6xl max-h-[90vh] mx-4" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
              >
                <X size={32} />
              </button>
              
              {/* Navigation Buttons */}
              {currentDesigns.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 z-10"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 z-10"
                  >
                    →
                  </button>
                </>
              )}

              {/* Image Container */}
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                <div className="relative">
                  <img
                    src={currentDesigns[selectedImage].image}
                    alt={currentDesigns[selectedImage].title}
                    className="w-full max-h-[70vh] object-contain"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {currentDesigns[selectedImage].title}
                      </h3>
                      <span className={`inline-flex items-center text-sm font-medium px-3 py-1 rounded-full ${
                        activeTab === 'mobile' 
                          ? 'text-blue-600 bg-blue-100' 
                          : 'text-purple-600 bg-purple-100'
                      }`}>
                        {activeTab === 'mobile' ? (
                          <>
                            <Smartphone size={14} className="mr-1" />
                            Mobile Design
                          </>
                        ) : (
                          <>
                            <Monitor size={14} className="mr-1" />
                            Web Design
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {currentDesigns[selectedImage].description}
                  </p>
                  
                  {/* Image Counter */}
                  <div className="mt-4 text-sm text-gray-500 text-center">
                    {selectedImage + 1} of {currentDesigns.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;