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

  const whyUs = [
    {
      icon: <FiTarget size={28} />,
      title: 'Engineering with Precision',
      description: 'Every solution is crafted with deep technical rigor, optimizing performance, power efficiency, and reliability from hardware to AI models.'
    },
    {
      icon: <FiShield size={28} />,
      title: 'Trust by Design',
      description: 'Security, privacy, and reliability are embedded into everything we build—because intelligence should be safe, dependable, and controlled at the edge.'
    },
    {
      icon: <FiTrendingUp size={28} />,
      title: 'Impact That Scales',
      description: 'We focus on building technologies that move beyond prototypes—deployable, scalable solutions that deliver real-world impact across industries.'
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

      {/* Core Services */}
      <section className="section-container bg-white">
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

      {/* Why Tiny Prism Labs */}
      <section className="section-container bg-gradient-to-br from-brand-deepNavy to-brand-navyBlue text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Why Tiny Prism Labs?
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto px-4">
            Engineering-first, R&D-driven technology company building intelligent edge systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-lightGrey/300/20 rounded-xl flex items-center justify-center text-brand-lightBlue mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-white/80 leading-relaxed text-sm sm:text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Differentiators - Detailed */}
      <section className="section-container bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built for Real-World Deployment
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Our solutions are engineered for production environments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Fully Offline AI',
              description: 'Complete AI inference on-device with zero cloud dependency. Ideal for secure environments, remote locations, and privacy-critical applications.',
              points: ['No internet required', 'Complete data privacy', 'Works in remote locations', 'Secure by design']
            },
            {
              title: 'Low-Power MCU Optimization',
              description: 'Optimized for battery-powered and energy-constrained devices. Months to years of operation on a single charge.',
              points: ['Ultra-low power consumption', 'Battery-optimized', 'PMIC integration', 'Extended deployment life']
            },
            {
              title: 'Production-Ready Solutions',
              description: 'Battle-tested in real deployments. From proof-of-concept to thousands of devices in production.',
              points: ['Proven reliability', 'Scalable architecture', 'Field-tested', 'Enterprise-grade']
            },
            {
              title: 'End-to-End MLOps',
              description: 'Complete pipeline from data ingestion to model deployment, monitoring, and updates at scale.',
              points: ['Automated pipelines', 'Model monitoring', 'OTA updates', 'Version control']
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-brand-lightGrey/20 to-brand-lightBlue/10 rounded-2xl p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{item.description}</p>
              <ul className="space-y-2">
                {item.points.map((point, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <FiCheckCircle className="text-brand-darkBlue flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
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
            Ready to Build Intelligent Edge Systems?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how we can help you deploy production-ready edge AI solutions.
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-white text-brand-darkBlue font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl">
            Schedule a Consultation
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
