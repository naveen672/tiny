import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiCpu, FiZap, FiLayers, FiCheckCircle, FiWifi, FiHardDrive, FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function EmbeddedSystems() {
  const [selectedImage, setSelectedImage] = useState(null);

  const developmentImages = [
    {
      src: 'Strategic_System_Architecture_1.png',
      title: 'Strategic System Architecture Planning',
      description: 'Technology stack evaluation and system architecture blueprints for production-ready embedded systems'
    },
    {
      src: 'Strategic_System_Architecture_2.jpg',
      title: 'System Architecture Design',
      description: 'Complete architectural specifications and technical roadmaps for scalable IoT solutions'
    },
    {
      src: 'Advanced_Firmware_Engineering_1.png',
      title: 'Advanced Firmware Development',
      description: 'Optimized firmware for low-power MCU operations and real-time edge processing'
    },
    {
      src: 'Advanced_Firmware_Engineering_2.jpg',
      title: 'Embedded Firmware Engineering',
      description: 'Robust firmware solutions maximizing MCU capabilities for complex applications'
    },
    {
      src: 'Turnkey_System_Development_1.png',
      title: 'Turnkey System Integration',
      description: 'Complete lifecycle development integrating electronics, PCB, and firmware'
    },
    {
      src: 'Turnkey_System_Development_2.jpg',
      title: 'End-to-End System Development',
      description: 'Fully integrated embedded solutions from concept to production'
    },
    {
      src: 'Core_Electronics_Design_1.png',
      title: 'Core Electronics Schematic Design',
      description: 'Precise electronic schematics with optimized power management and sensor integration'
    },
    {
      src: 'Core_Electronics_Design_2.jpg',
      title: 'Electronics Design Engineering',
      description: 'Reliable component relationships and intelligent circuit architecture'
    },
    {
      src: 'PCB_Layout&Fabrication_1.png',
      title: 'PCB Layout & Design',
      description: 'Professional PCB layouts for reliable, manufacturable embedded systems'
    },
    {
      src: 'PCB_Layout&Fabrication_2.jpg',
      title: 'PCB Fabrication Services',
      description: 'Production-ready board designs with comprehensive testing and validation'
    }
  ];

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? developmentImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === developmentImages.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') setSelectedImage(null);
    if (e.key === 'ArrowLeft') handlePrevImage();
    if (e.key === 'ArrowRight') handleNextImage();
  };
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: <FiCpu size={28} />,
      title: 'Strategic System Architecture',
      description: 'We transform your raw ideas into viable, production-ready technical blueprints. Before any hardware is built, we define the optimal technology stack and system architecture to ensure project feasibility and long-term scalability.'
    },
    {
      icon: <FiZap size={28} />,
      title: 'Firmware Engineering',
      description: 'We develop robust, optimized firmware that breathes life into your custom hardware. Our focus is on maximizing MCU capabilities for low-power operations and complex, real-time edge processing.'
    },
    {
      icon: <FiLayers size={28} />,
      title: 'Turnkey System Development',
      description: 'We execute the complete development lifecycle by seamlessly integrating electronics, board layouts, and firmware. This unified approach ensures all subsystems communicate flawlessly to deliver a fully functional end product.'
    },
    {
      icon: <FiHardDrive size={28} />,
      title: 'Core Electronics Design',
      description: 'We translate your high-level architectural blueprints into precise, optimized electronic schematics. Our designs focus on reliable component relationships, intelligent power management, and accurate sensor integration.'
    },
    {
      icon: <FiCheckCircle size={28} />,
      title: 'PCB Layout & Fabrication',
      description: 'We provide comprehensive board design services to bring your electronic schematics into the physical realm. This supporting capability ensures your custom PCBs are reliable, manufacturable, and ready for rigorous testing.'
    }
  ];

  const platforms = [
    { name: 'nRF52 Series', category: 'Nordic Semiconductor' },
    { name: 'ESP32-C6', category: 'Espressif' },
    { name: 'STM32U5', category: 'STMicroelectronics' },
    { name: 'STM32WBA', category: 'STMicroelectronics' },
    { name: 'RP2040', category: 'Raspberry Pi' },
    { name: 'CC2652', category: 'Texas Instruments' },
    { name: 'nRF91 Series', category: 'Cellular IoT' },
    { name: 'ESP32-S3', category: 'Espressif' }
  ];

  const capabilities = [
    'Idea-to-Architecture Roadmapping',
    'Zephyr RTOS & Bare-Metal Firmware',
    'Low-Power MCU Optimization',
    'RF & IoT Connectivity (BLE, Wi-Fi, Cellular)',
    'Hardware-Firmware Integration',
    'Schematic & Multi-layer PCB Design',
    'Real-Time Data Acquisition & EdgeAI',
    'Production Validation & Testing'
  ];

  const useCases = [
    {
      title: 'Medical Wearables',
      description: 'Ultra-low-power SoC designs for continuous health monitoring with months of battery life.',
      tech: ['nRF52', 'BLE 5.0', 'PMIC', 'Sensor Fusion']
    },
    {
      title: 'Industrial Sensors',
      description: 'Ruggedized embedded systems for harsh environments with reliable wireless connectivity.',
      tech: ['STM32', 'LoRa', 'Industrial I/O', 'MODBUS']
    },
    {
      title: 'Smart Home Devices',
      description: 'Wi-Fi 6 and BLE-enabled devices with local processing and cloud integration.',
      tech: ['ESP32-C6', 'Wi-Fi 6', 'Matter', 'OTA Updates']
    },
    {
      title: 'Asset Tracking',
      description: 'GPS-enabled trackers with cellular connectivity and extended battery operation.',
      tech: ['nRF91', 'GPS', 'NB-IoT', 'Power Management']
    }
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url(/embedded.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-brand-lightBlue/30 to-white/70" />
        
        <motion.div {...fadeIn} className="relative z-10 max-w-5xl mx-auto text-center px-4 py-20">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-brand-darkBlue to-brand-lightBlue rounded-2xl flex items-center justify-center text-white mb-8 mx-auto shadow-2xl">
            <FiCpu size={40} className="sm:w-12 sm:h-12" />
          </div>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 drop-shadow-sm">
            Embedded Systems Design
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 leading-relaxed font-semibold drop-shadow-sm">
            Custom hardware and firmware development.
          </p>
        </motion.div>
      </section>

      {/* Core Services */}
      <section className="section-container">
        <motion.div {...fadeIn} className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to production-ready embedded systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 card-hover"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-brand-darkBlue to-brand-lightBlue rounded-xl flex items-center justify-center text-white mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Platforms */}
      <section className="section-container bg-gradient-to-br from-brand-lightGrey/20 to-brand-lightBlue/10">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Supported Platforms
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Platform-agnostic development across leading MCU architectures
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 text-center card-hover"
            >
              <div className="font-bold text-gray-900 mb-1">{platform.name}</div>
              <div className="text-sm text-gray-600">{platform.category}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Technical Capabilities */}
      <section className="section-container">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive embedded systems expertise
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-gradient-to-r from-brand-lightGrey/20 to-brand-lightBlue/10 rounded-lg p-4 border border-brand-lightBlue/30"
              >
                <FiLayers className="text-brand-darkBlue flex-shrink-0" />
                <span className="text-gray-800 font-medium">{capability}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Use Cases */}
      <section className="section-container bg-gradient-to-br from-brand-deepNavy to-brand-navyBlue text-white">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real-World Applications
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Embedded systems powering diverse industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
              <p className="text-white/80 mb-6 leading-relaxed">{useCase.description}</p>
              <div className="flex flex-wrap gap-2">
                {useCase.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-brand-lightGrey/300/20 rounded-full text-sm border border-brand-lightBlue/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section-container">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Development Process
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              step: '01',
              title: 'Requirements & Architecture',
              description: 'Deep dive into your requirements, constraints, and goals. Define system architecture and component selection.'
            },
            {
              step: '02',
              title: 'Hardware Design & Prototyping',
              description: 'Schematic design, PCB layout, and prototype fabrication. Multiple design iterations with testing.'
            },
            {
              step: '03',
              title: 'Firmware Development',
              description: 'Embedded software development with RTOS, drivers, and application logic. Power optimization and testing.'
            },
            {
              step: '04',
              title: 'Integration & Testing',
              description: 'System integration, validation testing, and certification support. Production readiness assessment.'
            },
            {
              step: '05',
              title: 'Production & Support',
              description: 'Manufacturing support, quality assurance, and ongoing technical support for deployed systems.'
            }
          ].map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start space-x-6 bg-gradient-to-r from-brand-lightGrey/20 to-brand-lightBlue/10 rounded-2xl p-8 border border-brand-lightBlue/30"
            >
              <div className="text-5xl font-bold text-brand-darkBlue/20 flex-shrink-0">
                {process.step}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-700 leading-relaxed">{process.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Embedded Systems Development Gallery */}
      <section className="section-container bg-white">
        <motion.div {...fadeIn} className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Work in Action
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world embedded systems development across architecture, firmware, electronics, and PCB design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {developmentImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg card-hover">
                <img
                  src={`/embedded/${image.src}`}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deepNavy/80 via-brand-deepNavy/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3 className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2">
                    {image.title}
                  </h3>
                  <p className="text-white/90 text-xs sm:text-sm line-clamp-2">
                    {image.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Image Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close"
          >
            <FiX size={32} />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevImage();
            }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-3 hover:bg-black/70"
            aria-label="Previous image"
          >
            <FiChevronLeft size={32} />
          </button>

          {/* Image with Title */}
          <div className="flex flex-col items-center max-w-7xl w-full">
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={`/embedded/${developmentImages[selectedImage].src}`}
              alt={developmentImages[selectedImage].title}
              className="max-h-[75vh] max-w-full object-contain rounded-lg mb-4"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="text-center px-4">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                {developmentImages[selectedImage].title}
              </h3>
              <p className="text-white/80 text-sm sm:text-base max-w-2xl">
                {developmentImages[selectedImage].description}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextImage();
            }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-3 hover:bg-black/70"
            aria-label="Next image"
          >
            <FiChevronRight size={32} />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
            {selectedImage + 1} / {developmentImages.length}
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="section-container bg-gradient-to-r from-brand-darkBlue to-brand-lightBlue text-white">
        <motion.div {...fadeIn} className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your Embedded System?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss your hardware and firmware requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-brand-darkBlue font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base text-center">
              Get in Touch
            </Link>
            <Link to="/case-studies" className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-brand-darkBlue transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm sm:text-base text-center">
              View Case Studies
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
