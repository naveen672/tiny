import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiCpu, FiZap, FiShield, FiEye, FiActivity, FiTool } from 'react-icons/fi';

export default function CaseStudies() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const caseStudies = [
    {
      icon: <FiActivity size={32} />,
      title: 'Next-Gen Medical Wearable SoC',
      category: 'Embedded Systems',
      challenge: 'Accelerate market adoption for a new, ultra-low-power medical wearable SoC.',
      solution: 'Engineered an end-to-end ecosystem including a hardware reference design, on-chip DSP pipeline, firmware SDK, and full test suite.',
      outcomes: [
        'Ready-to-use hardware blueprint',
        'Clinical-grade data quality',
        '98% accurate edge AI'
      ],
      techStack: ['C', 'Zephyr RTOS', 'CMSIS-DSP', 'Python', 'Streamlit'],
      metrics: {
        accuracy: '98%',
        quality: 'Clinical-Grade',
        deployment: 'Production'
      }
    },
    {
      icon: <FiZap size={32} />,
      title: 'Mission-Critical Power Management',
      category: 'Embedded Systems',
      challenge: 'Develop PMBus-compliant PMIC firmware to ensure safe, uninterrupted power for telecom/data centers under extreme conditions.',
      solution: 'Engineered a PMIC module with bare-metal firmware to isolate the power stage, integrate protections, and enable full PMBus communication.',
      outcomes: [
        'Reliable power delivery',
        'Extreme condition protection',
        'Real-time configurability'
      ],
      techStack: ['Embedded C', 'PMIC (UCD3138)', 'Bare-metal firmware', 'PMBus'],
      metrics: {
        reliability: 'Mission-Critical',
        compliance: 'PMBus',
        deployment: 'Production'
      }
    },
    {
      icon: <FiEye size={32} />,
      title: 'Intelligent Edge Traffic Analytics',
      category: 'Edge AI & Cloud',
      challenge: 'Replace high-latency, expensive cloud traffic analytics with real-time field processing.',
      solution: 'Deployed an NVIDIA Jetson-based AI pipeline that performs all vehicle detection and tracking locally.',
      outcomes: [
        'Zero cloud latency',
        'Significantly lower TCO',
        'Seamless multi-camera tracking'
      ],
      techStack: ['NVIDIA Jetson Nano', 'Python', 'PyTorch', 'TensorRT'],
      metrics: {
        latency: 'Zero Cloud',
        cost: 'Lower TCO',
        deployment: 'Multi-Camera'
      }
    },
    {
      icon: <FiActivity size={32} />,
      title: 'Predictive Water Management AI',
      category: 'Edge AI & Cloud',
      challenge: 'Shift water treatment facilities from reactive manual planning to proactive flow prediction.',
      solution: 'Developed an Azure-based time-series forecasting engine delivered seamlessly via REST API.',
      outcomes: [
        'Data-driven operational forecasting',
        'Continuous adaptive learning',
        'Zero-friction dashboard integration'
      ],
      techStack: ['Python', 'TensorFlow', 'LSTM', 'SARIMAX', 'Microsoft Azure', 'REST API'],
      metrics: {
        platform: 'Azure',
        integration: 'REST API',
        learning: 'Adaptive'
      }
    },
    {
      icon: <FiEye size={32} />,
      title: 'Flexible Facial Recognition Security',
      category: 'Edge AI & Cloud',
      challenge: 'Eliminate latency by deploying a fast, camera-agnostic facial recognition system flexible enough for edge or cloud.',
      solution: 'Engineered a highly portable, proprietary AI engine that integrates with any existing IP camera via RTSP streams.',
      outcomes: [
        'Edge/server/cloud portability',
        '90% real-time accuracy',
        'Effortless camera integration'
      ],
      techStack: ['NVIDIA Jetson', 'Raspberry Pi 5', 'Python', 'OpenCV'],
      metrics: {
        accuracy: '90%',
        deployment: 'Flexible',
        cameras: 'RTSP Compatible'
      }
    },
    {
      icon: <FiTool size={32} />,
      title: 'High-Speed Bolt Defect Detection',
      category: 'Edge AI & Cloud',
      challenge: 'Automate defect detection for lakhs of bolts on high-speed conveyors without bottlenecking production.',
      solution: 'Integrated a custom Edge AI object detection algorithm with multi-camera CCTV streams directly on the production line.',
      outcomes: [
        'Automated high-volume inspection',
        'Zero-latency edge processing',
        'Scalable multi-line monitoring'
      ],
      techStack: ['NVIDIA Jetson Nano', 'STM32', 'Python', 'C++', 'OpenCV', 'TensorRT'],
      metrics: {
        volume: 'Lakhs/shift',
        latency: 'Zero',
        deployment: 'Multi-Camera'
      }
    },
    {
      icon: <FiShield size={32} />,
      title: 'Real-Time PPE Workplace Safety',
      category: 'Edge AI & Cloud',
      challenge: 'Automate PPE (helmet and vest) compliance monitoring across large industrial sites to ensure real-time safety.',
      solution: 'Deployed a multi-model AI system over CCTV that instantly classifies safe/unsafe personnel, scalable to edge or cloud.',
      outcomes: [
        'Real-time safety alerts',
        'Scalable site monitoring',
        'Actionable risk analytics'
      ],
      techStack: ['Cloud/Servers', 'Python', 'C++', 'OpenCV', 'TensorRT', 'Grafana'],
      metrics: {
        alerts: 'Real-time',
        monitoring: 'Scalable',
        deployment: 'Flexible'
      }
    },
    {
      icon: <FiCpu size={32} />,
      title: 'Predictive Maintenance for Machinery',
      category: 'Industrial IoT',
      challenge: 'Prevent costly industrial machinery downtime through proactive, on-site sensor analysis.',
      solution: 'Engineered a rugged, low-power MCU device running on-device CNNs to analyze vibration/temperature and transmit BLE alerts.',
      outcomes: [
        'Preventative maintenance alerts',
        'Zero cloud computing dependency',
        'Seamless Grafana dashboard integration'
      ],
      techStack: ['Low-power MCU', 'CNNs', 'BLE', 'Grafana'],
      metrics: {
        downtime: 'Reduced',
        processing: 'On-device',
        connectivity: 'BLE'
      }
    }
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="section-container bg-gradient-to-br from-brand-lightGrey/20 via-brand-lightBlue/10 to-brand-lightGrey/30">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center px-4">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Case Studies
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
            Real engineering solutions deployed in production environments. Measurable outcomes 
            from embedded systems and edge AI projects across industries.
          </p>
        </motion.div>
      </section>

      {/* Stats Overview */}
      <section className="section-container bg-gradient-to-r from-brand-darkBlue to-brand-lightBlue text-white">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          <motion.div {...fadeIn}>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">50+</div>
            <div className="text-white/80 text-sm sm:text-base">Projects Delivered</div>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">15+</div>
            <div className="text-white/80 text-sm sm:text-base">Industries Served</div>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">10K+</div>
            <div className="text-white/80 text-sm sm:text-base">Devices Deployed</div>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.3 }}>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">99.9%</div>
            <div className="text-white/80 text-sm sm:text-base">Average Uptime</div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-container">
        <motion.div {...fadeIn} className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Production Deployments
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Each case study represents a production system delivering real business value
          </p>
        </motion.div>

        <div className="space-y-8 sm:space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden card-hover"
            >
              <div className="p-6 sm:p-8 md:p-10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-darkBlue to-brand-lightBlue rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    {study.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs sm:text-sm font-semibold text-brand-darkBlue uppercase mb-2">
                      {study.category}
                    </div>
                    <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">{study.title}</h3>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
                  {/* Challenge */}
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      The Challenge
                    </h4>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-brand-lightGrey/300 rounded-full mr-3"></span>
                      Strategic Solution
                    </h4>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{study.solution}</p>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Core Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {study.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <FiCheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                          <span className="text-gray-700 text-sm leading-relaxed">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Metrics */}
                <div className="bg-gradient-to-br from-brand-lightGrey/20 to-brand-lightBlue/10 rounded-xl p-4 sm:p-6 mb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
                    {Object.entries(study.metrics).map(([key, value], idx) => (
                      <div key={idx} className="py-2 sm:py-0">
                        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-darkBlue mb-1">
                          {value}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Stack */}
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-600 uppercase mb-3">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {study.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white border border-gray-300 text-gray-800 rounded-lg text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industry Focus */}
      <section className="section-container bg-gradient-to-br from-brand-deepNavy to-brand-navyBlue text-white">
        <motion.div {...fadeIn} className="text-center mb-8 sm:mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Deep expertise across multiple verticals
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {[
            'Healthcare',
            'Manufacturing',
            'Smart Cities',
            'Agriculture',
            'Industrial IoT',
            'Workplace Safety',
            'Energy & Utilities',
            'Retail & Logistics'
          ].map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 text-center"
            >
              <div className="font-semibold text-sm sm:text-base md:text-lg">{industry}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="section-container">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Our Engineering Approach
          </h2>
          <div className="bg-gradient-to-br from-brand-lightGrey/20 to-brand-lightBlue/10 rounded-2xl p-6 sm:p-8 border border-brand-lightBlue/30">
            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
              Every project begins with a deep understanding of technical constraints, business 
              requirements, and deployment environments. We focus on production-ready solutions 
              that are reliable, maintainable, and scalable.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2">Engineering with Precision</h3>
                <p className="text-gray-700 text-sm sm:text-base">Rigorous testing, validation, and optimization at every stage.</p>
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2">Real-World Focus</h3>
                <p className="text-gray-700 text-sm sm:text-base">Solutions designed for actual deployment conditions and constraints.</p>
              </div>
              <div className="sm:col-span-2 md:col-span-1">
                <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2">Long-Term Partnership</h3>
                <p className="text-gray-700 text-sm sm:text-base">Ongoing support and continuous improvement post-deployment.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="section-container bg-gradient-to-r from-brand-darkBlue to-brand-lightBlue text-white">
        <motion.div {...fadeIn} className="text-center max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Let's Build Your Next Success Story
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90">
            Partner with us to deploy production-ready edge AI and embedded systems solutions.
          </p>
          <Link to="/contact" className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-white text-brand-darkBlue font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl text-sm sm:text-base">
            Start Your Project
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
