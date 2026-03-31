import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiTarget, FiEye, FiAward, FiUsers, FiTrendingUp, FiCpu, FiHardDrive, FiZap, FiDatabase, FiBarChart2, FiLayers, FiTool } from 'react-icons/fi';

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const values = [
    {
      icon: <FiCpu size={32} />,
      title: 'Engineering Excellence',
      description: 'Deep technical expertise across embedded systems, AI/ML, and edge computing. We solve complex problems with precision and rigor.'
    },
    {
      icon: <FiTarget size={32} />,
      title: 'Production-First Mindset',
      description: 'Every solution is built for real-world deployment. We focus on reliability, scalability, and long-term maintainability.'
    },
    {
      icon: <FiUsers size={32} />,
      title: 'Customer Partnership',
      description: 'We work closely with clients to understand their unique challenges and deliver solutions that create measurable impact.'
    },
    {
      icon: <FiTrendingUp size={32} />,
      title: 'Continuous Innovation',
      description: 'R&D-driven approach keeps us at the forefront of edge AI and embedded systems technology.'
    }
  ];

  const expertise = [
    'Embedded Systems Architecture',
    'TinyML & Edge AI',
    'Computer Vision Systems',
    'IoT Connectivity (BLE, Wi-Fi 6, LoRa)',
    'Low-Power MCU Optimization',
    'PMIC & Power Management',
    'Industrial Sensor Integration',
    'MLOps & Model Deployment',
    'Real-Time Operating Systems',
    'Secure Boot & OTA Updates'
  ];

  const capabilities = [
    {
      icon: <FiHardDrive size={28} />,
      title: 'Custom Hardware Design & Prototyping',
      description: 'Design and development of sensor-integrated, power-optimized embedded hardware for AI workloads.',
      simpleDesc: 'We design and build small, smart hardware tailored to your needs.'
    },
    {
      icon: <FiCpu size={28} />,
      title: 'Embedded ML Model Development',
      description: 'Tailored machine learning model design, training, quantization, and optimization for microcontrollers and low-power devices.',
      simpleDesc: 'We create and train machine learning models that run directly on tiny devices like sensors or wearables.'
    },
    {
      icon: <FiLayers size={28} />,
      title: 'Firmware & Software Development',
      description: 'End-to-end software stack development for sensor interfacing, data acquisition, ML inference, and edge communication.',
      simpleDesc: 'We develop the software that connects everything — from sensors to apps — so your solution works smoothly from start to finish.'
    },
    {
      icon: <FiZap size={28} />,
      title: 'System Integration & Deployment',
      description: 'Seamless integration of ML models with embedded platforms (e.g., ARM Cortex-M, ESP32, NRF, etc.), including OTA updates and performance tuning.',
      simpleDesc: 'We help you roll out your solution and keep it running reliably with ongoing updates and support.'
    },
    {
      icon: <FiTool size={28} />,
      title: 'Lifecycle Support & Maintenance',
      description: 'Post-deployment monitoring, performance analysis, and model updates.',
      simpleDesc: 'Easy deployment and long-term support to keep your systems running smoothly.'
    }
  ];

  const dataCapabilities = [
    {
      icon: <FiDatabase size={28} />,
      title: 'Sensor Data Preprocessing & Analysis',
      description: 'Noise reduction, feature extraction, and time-series analysis for real-time and batch processing.',
      simpleDesc: 'We clean, organize, and analyze your data to highlight what matters most.'
    },
    {
      icon: <FiBarChart2 size={28} />,
      title: 'Insightful Dashboards & Visualization Tools',
      description: 'Custom visualization interfaces to monitor model predictions, device metrics, and operational trends.',
      simpleDesc: 'We create intuitive dashboards that let you track key metrics and spot trends at a glance.'
    },
    {
      icon: <FiTrendingUp size={28} />,
      title: 'Data-Driven Optimization',
      description: 'Feedback loops for model retraining, system tuning, and predictive maintenance.',
      simpleDesc: 'We help you use insights from your data to improve performance, prevent problems, and plan ahead.'
    }
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="section-container bg-gradient-to-br from-brand-lightGrey/20 via-brand-lightBlue/10 to-brand-lightGrey/20">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center px-4">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Building the Future of <br />
            <span className="gradient-text">Edge Intelligence</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
            Tiny Prism Labs is an engineering-first, R&D-driven technology company specializing in 
            embedded systems, edge AI, and TinyML solutions that power intelligent devices across industries.
          </p>
        </motion.div>
      </section>

      {/* Mission, Vision, Goal */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-brand-lightGrey/20 to-brand-lightBlue/10 rounded-2xl p-6 sm:p-8 border border-brand-lightBlue/30"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-darkBlue rounded-xl flex items-center justify-center text-white mb-6">
              <FiTarget size={28} />
            </div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Simplifying integration of intelligence on the Edge.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-brand-lightBlue/10 to-brand-lightGrey/20 rounded-2xl p-6 sm:p-8 border border-brand-lightBlue/30"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-navyBlue rounded-xl flex items-center justify-center text-white mb-6">
              <FiEye size={28} />
            </div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              To become a global leader in integrating intelligence to accelerate customer growth and productivity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-brand-lightBlue/10 to-brand-lightGrey/20 rounded-2xl p-6 sm:p-8 border border-brand-lightBlue/30"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-lightBlue rounded-xl flex items-center justify-center text-white mb-6">
              <FiAward size={28} />
            </div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Goal</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              TPL builds systems providing on-device ML intelligence for sensor-based systems to automate and increase productivity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Capabilities - Intelligent Systems */}
      <section className="section-container bg-white">
        <motion.div {...fadeIn} className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Building Intelligent Systems
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering compact, intelligent systems that operate efficiently at the edge
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-brand-lightGrey/20 to-brand-lightBlue/10 rounded-2xl p-6 sm:p-8 border border-gray-200 card-hover"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-darkBlue to-brand-lightBlue rounded-xl flex items-center justify-center text-white mb-6">
                {capability.icon}
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {capability.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3 text-sm sm:text-base">
                {capability.description}
              </p>
              <p className="text-gray-600 leading-relaxed text-sm italic">
                {capability.simpleDesc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Data Analytics Capabilities */}
      <section className="section-container bg-gradient-to-br from-brand-lightGrey/20 to-brand-lightBlue/10">
        <motion.div {...fadeIn} className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Making Sense of Your Data
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Unlocking value from raw sensor and device data
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {dataCapabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 card-hover"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-600 to-brand-darkBlue rounded-xl flex items-center justify-center text-white mb-6">
                {capability.icon}
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {capability.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3 text-sm sm:text-base">
                {capability.description}
              </p>
              <p className="text-gray-600 leading-relaxed text-sm italic">
                {capability.simpleDesc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="section-container bg-white">
        <motion.div {...fadeIn} className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Drives Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Our values shape how we engineer solutions and partner with clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 card-hover"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-darkBlue to-brand-lightBlue rounded-xl flex items-center justify-center text-white mb-6">
                {value.icon}
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="section-container bg-gradient-to-br from-brand-lightGrey/20 to-brand-lightBlue/10">
        <motion.div {...fadeIn} className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep specialization across the embedded AI stack
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
            {expertise.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white rounded-lg p-4 border border-gray-200"
              >
                <div className="w-2 h-2 bg-brand-darkBlue rounded-full flex-shrink-0"></div>
                <span className="text-gray-800 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Company Story */}
      <section className="section-container bg-white">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Tiny Prism Labs was founded with a clear vision: to bridge the gap between cutting-edge 
              AI research and practical, deployable embedded systems. We recognized that while AI was 
              advancing rapidly, most solutions required cloud connectivity and high-powered hardware.
            </p>
            <p>
              Our team of embedded systems engineers and ML researchers came together to solve a 
              fundamental challenge—bringing intelligence directly to the edge, where data is generated. 
              This meant optimizing complex AI models to run on low-power microcontrollers, designing 
              custom hardware, and building production-ready systems that could operate offline.
            </p>
            <p>
              Today, we work with enterprises across manufacturing, healthcare, agriculture, and smart 
              infrastructure to deploy edge AI solutions that are secure, reliable, and scalable. Our 
              systems process millions of inferences daily, enabling real-time decision-making without 
              cloud dependency.
            </p>
            <p className="font-semibold text-gray-900">
              We don't just build prototypes—we engineer systems that work in the real world, under 
              real constraints, delivering real value.
            </p>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="section-container bg-gradient-to-br from-brand-deepNavy to-brand-navyBlue text-white">
        <motion.div {...fadeIn} className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something Great Together
          </h2>
          <p className="text-xl mb-8 text-white/80">
            Partner with us to bring intelligent edge solutions to your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Get in Touch
            </Link>
            <Link to="/case-studies" className="btn-secondary">
              View Our Work
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
