import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiCpu, 
  FiZap, 
  FiShield, 
  FiTrendingUp, 
  FiTarget,
  FiCheckCircle,
  FiArrowRight
} from 'react-icons/fi';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: <FiCpu size={32} />,
      title: 'Embedded Systems Design',
      description: 'Custom embedded hardware engineered for low power, high reliability, and seamless AI integration—built to scale from prototype to production.',
      link: '/services/embedded-systems'
    },
    {
      icon: <FiCpu size={32} />,
      title: 'AI & Machine Learning',
      description: 'Optimized AI models designed to run efficiently on edge devices, delivering real-time intelligence without relying on the cloud.',
      link: '/services/ai-machine-learning'
    },
    {
      icon: <FiZap size={32} />,
      title: 'Edge Computing Solutions',
      description: 'On-device intelligence that enables instant, secure, and autonomous decision-making anytime, anywhere.',
      link: '/services/edge-computing'
    }
  ];

  const differentiators = [
    {
      icon: <FiShield size={24} />,
      title: 'Fully Offline AI',
      description: 'No internet dependency. Complete data privacy and security.'
    },
    {
      icon: <FiZap size={24} />,
      title: 'Low-Power Optimization',
      description: 'MCU & edge optimization for battery-powered deployments.'
    },
    {
      icon: <FiCheckCircle size={24} />,
      title: 'Production-Ready',
      description: 'Real-world deployments with proven reliability and scalability.'
    },
    {
      icon: <FiTrendingUp size={24} />,
      title: 'Engineering Excellence',
      description: 'R&D-driven approach with technical depth and precision.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-lightGrey/20 via-brand-lightBlue/10 to-brand-lightGrey/20 overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative section-container">
          <div className="max-w-4xl">
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
                Intelligence on the <span className="gradient-text">Edge</span>.
                <br />
                Innovation at the <span className="gradient-text">Core</span>.
              </h1>
            </motion.div>

            <motion.p
              {...fadeIn}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl leading-relaxed"
            >
              Building low-power, fully offline, intelligent systems that run directly on devices. 
              Embedded AI solutions engineered for reliability, security, and real-world deployment.
            </motion.p>

            <motion.div
              {...fadeIn}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact" className="btn-primary text-center">
                Get in Touch
              </Link>
              <Link to="/case-studies" className="btn-secondary text-center">
                View Case Studies
              </Link>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{ delay: 0.8 }}
              className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {differentiators.map((item, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-darkBlue to-brand-lightBlue rounded-lg flex items-center justify-center text-white mb-4">{item.icon}</div>
                  <h3 className="font-heading font-bold text-gray-900 text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-container bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Who We Are
          </h2>
          <div className="bg-gradient-to-br from-brand-lightGrey/20 to-brand-lightBlue/10 rounded-2xl p-8 sm:p-10 border border-brand-lightBlue/30">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
              Tiny Prism Labs is a technology services company focused on the intersection of embedded systems and artificial intelligence. The goal is to build smart, efficient, and reliable tech solutions for businesses.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Rather than selling one-size-fits-all tools, the company works closely with each client to build technology that fits their specific world, from the hardware level all the way up to intelligent software.
            </p>
          </div>
        </motion.div>
      </section>

      {/* What We Do */}
      <section className="section-container bg-gradient-to-br from-brand-lightGrey/20 via-brand-lightBlue/10 to-brand-lightGrey/20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Most tech companies choose between building hardware or software, but Tiny Prism Labs does both to ensure they work together perfectly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Embedded Systems Design */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-brand-darkBlue to-brand-lightBlue rounded-xl flex items-center justify-center text-white mb-6">
              <FiCpu size={32} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Embedded Systems Design</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              This is the foundational layer of any smart device—the firmware, architecture, and electronics. Every design follows four key principles:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FiCheckCircle className="text-brand-darkBlue flex-shrink-0 mt-1" size={20} />
                <div>
                  <span className="font-semibold text-gray-900">Firmware-driven design:</span>
                  <span className="text-gray-700"> Hardware and software are planned together from day one.</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FiCheckCircle className="text-brand-darkBlue flex-shrink-0 mt-1" size={20} />
                <div>
                  <span className="font-semibold text-gray-900">High accuracy:</span>
                  <span className="text-gray-700"> Precision is prioritized because "close enough" isn't an option.</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FiCheckCircle className="text-brand-darkBlue flex-shrink-0 mt-1" size={20} />
                <div>
                  <span className="font-semibold text-gray-900">High reliability:</span>
                  <span className="text-gray-700"> Devices are built to keep working in tough conditions without constant maintenance.</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FiCheckCircle className="text-brand-darkBlue flex-shrink-0 mt-1" size={20} />
                <div>
                  <span className="font-semibold text-gray-900">Low power consumption:</span>
                  <span className="text-gray-700"> Systems are optimized for IoT and edge devices running on batteries.</span>
                </div>
              </li>
            </ul>
            <Link to="/services/embedded-systems" className="inline-flex items-center mt-6 text-brand-darkBlue font-semibold hover:text-brand-lightBlue transition-colors">
              Learn More <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>

          {/* Hardware-Aware AI Design */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-brand-darkBlue to-brand-lightBlue rounded-xl flex items-center justify-center text-white mb-6">
              <FiZap size={32} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Hardware-Aware AI Design</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              On top of the hardware, intelligence is added. The company develops AI-powered software that allows devices to see, understand, and make decisions, turning standard equipment into smart systems.
            </p>
            <div className="bg-gradient-to-br from-brand-lightGrey/20 to-brand-lightBlue/10 rounded-xl p-6 mb-6">
              <p className="text-gray-700 leading-relaxed">
                AI models are optimized specifically for the hardware they run on, ensuring maximum performance, minimal power consumption, and real-time decision-making capabilities—all without relying on cloud connectivity.
              </p>
            </div>
            <Link to="/services/ai-machine-learning" className="inline-flex items-center text-brand-darkBlue font-semibold hover:text-brand-lightBlue transition-colors">
              Learn More <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How We Deploy */}
      <section className="section-container bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We Deploy
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Flexibility is a major differentiator. Solutions can run in three different environments depending on a client's needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <FiCpu size={28} />,
              title: 'Cloud',
              description: 'For scale and remote access.',
              details: 'Deploy AI models on cloud infrastructure for applications requiring massive scalability, global access, and centralized management.'
            },
            {
              icon: <FiShield size={28} />,
              title: 'On-Premise',
              description: 'For data privacy and local control.',
              details: 'Keep everything in-house with secure on-premise deployments that give you complete control over your data and infrastructure.'
            },
            {
              icon: <FiZap size={28} />,
              title: 'Edge AI',
              description: 'For real-time decisions directly on the device with no internet needed.',
              details: 'Run AI inference locally on devices for instant response times, offline operation, and enhanced privacy—no cloud dependency required.'
            }
          ].map((deployment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-brand-lightGrey/20 to-brand-lightBlue/10 rounded-2xl p-8 border border-gray-200 card-hover"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-brand-darkBlue to-brand-lightBlue rounded-xl flex items-center justify-center text-white mb-6">
                {deployment.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{deployment.title}</h3>
              <p className="text-brand-darkBlue font-semibold mb-4">{deployment.description}</p>
              <p className="text-gray-700 leading-relaxed text-sm">{deployment.details}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Whether it's a factory floor needing local AI or a healthcare provider requiring a secure server, the technology adapts to the requirement.
          </p>
        </motion.div>
      </section>

      {/* Core Services */}
      <section className="section-container bg-gradient-to-br from-brand-lightGrey/20 via-brand-lightBlue/10 to-brand-lightGrey/20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Core Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            End-to-end embedded AI solutions from hardware design to production deployment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={service.link}>
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 sm:p-8 h-full card-hover hover:border-brand-lightBlue/30">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-darkBlue to-brand-lightBlue rounded-xl flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                  <div className="flex items-center text-brand-darkBlue font-semibold group-hover:text-brand-lightBlue transition-colors">
                    Learn More <FiArrowRight className="ml-2 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-container bg-gradient-to-br from-brand-deepNavy to-brand-navyBlue text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our Approach
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto px-4">
            Building like product makers, thinking like engineers
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-white/20 mb-8"
          >
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-6">
              The team at Tiny Prism Labs thinks like product builders. When taking on a project, the focus is on whether the end result is something people would actually want to use or buy.
            </p>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              This mindset puts user experience and reliability at the forefront, rather than just technical specifications. Even as a small, focused team, the work is built to scale. The process involves breaking a problem down into every necessary layer—silicon, firmware, data, and intelligence—to solve it properly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <FiTarget size={28} />,
                title: 'User-Centric Design',
                description: 'Building technology that people actually want to use, not just what\'s technically possible.'
              },
              {
                icon: <FiShield size={28} />,
                title: 'Built to Scale',
                description: 'Solutions engineered for growth, from prototype to thousands of production units.'
              },
              {
                icon: <FiTrendingUp size={28} />,
                title: 'Full-Stack Depth',
                description: 'From silicon to intelligence—solving problems at every layer of the technology stack.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-lightBlue/20 rounded-xl flex items-center justify-center text-brand-lightBlue mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-gradient-to-r from-brand-darkBlue to-brand-lightBlue text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something Great Together
          </h2>
          <p className="text-xl mb-6 text-white/90 leading-relaxed">
            Tiny Prism Labs builds smart technology from the ground up, combining hardware and AI to help companies create systems that are more capable and intelligent than what they could build alone.
          </p>
          <p className="text-lg mb-8 text-white/80">
            If you have a device to build, a process to automate, or a problem that needs both hardware and software to solve — we are the team to call.
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-white text-brand-darkBlue font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl">
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
