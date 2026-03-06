import { motion } from 'framer-motion';
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
      title: 'Accelerating Market Adoption for a Next-Generation Testing',
      category: 'Embedded Systems',
      challenge: 'A new, ultra-low-power SoC for medical wearables faced a significant market adoption barrier.',
      solution: 'Tiny Prism Labs engineered an end-to-end development ecosystem, creating a market-ready reference wearable, a sophisticated on-chip signal processing pipeline, a flexible firmware SDK, and a comprehensive test suite.',
      outcomes: [
        'Reference Design: A complete hardware wearable serving as a viable product blueprint',
        'Signal Processing: On-chip pipeline ensuring clinical-grade data quality',
        'Edge AI: Power-optimized model with 98% accuracy for real-time analysis'
      ],
      techStack: ['C', 'Zephyr RTOS', 'CMSIS-DSP', 'Python', 'Streamlit'],
      metrics: {
        accuracy: '98%',
        type: 'Medical Grade',
        deployment: 'Production'
      }
    },
    {
      icon: <FiZap size={32} />,
      title: 'Power Management for Mission-Critical Systems',
      category: 'Embedded Systems',
      challenge: 'Telecom stations and data centers demand uninterrupted power supply without compromising on safety. Extreme conditions such as high power, high current, and high temperatures can lead to failures if not managed properly. To ensure reliability, an application firmware must be designed for a PMIC (Power Management Integrated Circuit) that adheres to PMBus standards and meets product specifications.',
      solution: 'A PMIC-based module engineered to: 1. Isolate the power stage for safety. 2. Provide protection, communication, and monitoring features. 3. Fully comply with PMBus standards for control and configuration.',
      outcomes: [
        'Reliable power management',
        'Protection features integrated for extreme operating conditions',
        'PMBus command set implemented for configurability and real-time monitoring'
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
      title: 'Intelligent Traffic Analytics at the Edge',
      category: 'AI',
      challenge: 'Municipalities and private estates often rely on cloud-based analytics for traffic management, incurring high costs and latency. A more efficient, robust, and affordable solution was needed to provide real-time vehicle analytics directly in the field.',
      solution: 'We engineered a powerful, self-contained edge device on the NVIDIA Jetson platform. The system performs all computations locally, using a sophisticated AI pipeline for real-time vehicle detection, tracking, and re-identification across multiple cameras.',
      outcomes: [
        'Instant Response: On-device processing provides real-time analytics with zero cloud latency',
        'Cost-Effective: Significantly lower total cost of ownership compared to cloud-based subscriptions',
        'Multi-Camera Tracking: Re-identifies vehicles across different cameras for comprehensive journey analysis'
      ],
      techStack: ['NVIDIA Jetson Nano', 'Python', 'PyTorch', 'TensorRT', 'Custom Real-time Application'],
      metrics: {
        latency: 'Zero Cloud',
        deployment: 'Multi-Camera',
        cost: 'Lower TCO'
      }
    },
    {
      icon: <FiActivity size={32} />,
      title: 'Predictive AI for Sustainable Water Management',
      category: 'AI',
      challenge: 'A water treatment organization was operating reactively, relying on historical data and manual analysis for resource planning. This approach lacked the ability to anticipate sudden changes in water flow, leading to inefficiencies.',
      solution: 'We developed a cloud-native AI forecasting engine on Microsoft Azure. The solution leverages advanced time-series models to predict water flow with high accuracy and delivers forecasts via a simple API for seamless integration.',
      outcomes: [
        'Predictive Forecasting: Enabled proactive, data-driven decision-making for field teams',
        'Adaptive AI: A continuous learning loop keeps the model accurate and relevant',
        'Seamless Integration: API-first delivery required zero changes to the client\'s existing dashboards'
      ],
      techStack: ['Python', 'TensorFlow', 'LSTM', 'SARIMAX', 'Microsoft Azure', 'REST API'],
      metrics: {
        accuracy: 'High',
        platform: 'Azure',
        integration: 'API-first'
      }
    },
    {
      icon: <FiEye size={32} />,
      title: 'Real-time Face Recognition for Secure Environments',
      category: 'AI',
      challenge: 'Standard security solutions often depend on a single deployment model, introducing latency or high costs. A flexible, camera-agnostic solution was needed that could perform fast, reliable recognition locally, or scale with a cloud or on-premises backend.',
      solution: 'We engineered a highly portable solution deployable on compact edge devices, private servers, or the cloud. The system runs a proprietary, optimized facial recognition engine achieving 90% accuracy and integrates with any IP camera via RTSP streams.',
      outcomes: [
        'Flexible Deployment: Portable design runs on edge, cloud, or on-premises servers',
        'High-Accuracy AI: Proprietary model delivers 90% accuracy in real time',
        'Camera Agnostic: Integrates effortlessly with existing IP cameras via RTSP streams'
      ],
      techStack: ['NVIDIA Jetson', 'Raspberry Pi 5', 'Python', 'OpenCV', 'Proprietary Engine', 'Custom Application'],
      metrics: {
        accuracy: '90%',
        deployment: 'Flexible',
        cameras: 'RTSP Compatible'
      }
    },
    {
      icon: <FiTool size={32} />,
      title: 'Production-Ready Real-Time Bolt Detection for Industry Use',
      category: 'AI',
      challenge: 'Manufacturing units produce lakhs of bolts in a single shift. Manually identifying defects or missing bolts during high-speed conveyor belt operations is impractical and error-prone. Quality control teams needed a real-time, automated solution to ensure best accuracy without slowing down production.',
      solution: 'We developed an edge AI solution that integrates directly with conveyor systems, with flexibility to scale for on-premise or cloud deployment as required by industry workflows. The system leverages a custom object detection algorithm optimized for embedded hardware, enabling continuous inspection of every bolt in real time. It also supports connecting to multiple CCTV cameras for simultaneous monitoring across different production lines.',
      outcomes: [
        'Automated detection ensures consistent quality across lakhs of bolts',
        'AI runs directly on-device at the edge, reducing latency',
        'Supports multiple CCTV streams for monitoring several conveyor belts simultaneously',
        'Reduces manual inspection time and minimizes production slowdowns'
      ],
      techStack: ['NVIDIA Jetson Nano', 'STM32 series', 'Python', 'C++', 'OpenCV', 'TensorRT', 'Multi-camera'],
      metrics: {
        volume: 'Lakhs/shift',
        latency: 'Real-time',
        deployment: 'Multi-camera'
      }
    },
    {
      icon: <FiShield size={32} />,
      title: 'Production-Ready Real-Time Helmet & Vest Detection for Workplace Safety',
      category: 'AI',
      challenge: 'Ensuring employee safety in industrial environments is a critical responsibility. Traditional manual monitoring through supervisors or periodic checks often fails to detect violations like missing helmets or vests, especially when managing large teams across multiple sites. Companies needed a reliable, real-time, automated solution that ensures compliance without adding overhead to operations.',
      solution: 'We engineered an AI-driven multi-model system capable of detecting helmets and vests simultaneously through multiple CCTV cameras across the workplace. By combining person detection with protective gear identification, the system automatically classifies each individual as safe (helmet and vest detected) or unsafe (missing safety equipment). The deployment is designed for on-premise and cloud environments, ensuring flexibility to integrate with existing IT infrastructure and security policies.',
      outcomes: [
        'Real-time alerts',
        'Scalable monitoring',
        'Risk reduction & Actionable analytics'
      ],
      techStack: ['Servers', 'Cloud instances', 'Python', 'C++', 'OpenCV', 'TensorRT', 'Multi-camera', 'Grafana'],
      metrics: {
        alerts: 'Real-time',
        monitoring: 'Scalable',
        deployment: 'Flexible'
      }
    },
    {
      icon: <FiCpu size={32} />,
      title: 'Predictive Maintenance for Industrial Machinery',
      category: 'Industrial IoT & Edge AI',
      challenge: 'Unexpected machinery failures lead to costly downtime and reactive, inefficient maintenance cycles. Industrial operators required a proactive solution to anticipate equipment wear and tear by analyzing complex sensor data in real time.',
      solution: 'We engineered a compact, rugged hardware device that mounts directly onto machinery. This device runs a highly efficient CNN and anomaly detection model on a low-power microcontroller to process vibration and temperature data at the source, transmitting inferences wirelessly via BLE.',
      outcomes: [
        'Reduced Downtime: Proactive alerts enable maintenance before critical failure occurs',
        'On-Device Intelligence: Real-time processing on a low-power MCU eliminates cloud dependency',
        'Seamless Integration: Dashboard built on Grafana for easy adoption and integration'
      ],
      techStack: ['nRF52/54', 'STM32WBA', 'C', 'TensorFlow Lite', 'CMSIS-DSP', 'BLE', 'Grafana'],
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
      <section className="section-container bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
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
      <section className="section-container bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          <motion.div {...fadeIn}>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">50+</div>
            <div className="text-blue-100 text-sm sm:text-base">Projects Delivered</div>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">15+</div>
            <div className="text-blue-100 text-sm sm:text-base">Industries Served</div>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">10K+</div>
            <div className="text-blue-100 text-sm sm:text-base">Devices Deployed</div>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.3 }}>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">99.9%</div>
            <div className="text-blue-100 text-sm sm:text-base">Average Uptime</div>
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
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    {study.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs sm:text-sm font-semibold text-blue-600 uppercase mb-2">
                      {study.category}
                    </div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{study.title}</h3>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
                  {/* Challenge */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      The Challenge
                    </h4>
                    <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Strategic Solution
                    </h4>
                    <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
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
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 mb-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {Object.entries(study.metrics).map(([key, value], idx) => (
                      <div key={idx}>
                        <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                          {value}
                        </div>
                        <div className="text-xs md:text-sm text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Stack */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 uppercase mb-3">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {study.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-white border border-gray-300 text-gray-800 rounded-lg text-sm font-medium"
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
      <section className="section-container bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <motion.div {...fadeIn} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Deep expertise across multiple verticals
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
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
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
            >
              <div className="font-semibold text-lg">{industry}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="section-container">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Our Engineering Approach
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Every project begins with a deep understanding of technical constraints, business 
              requirements, and deployment environments. We focus on production-ready solutions 
              that are reliable, maintainable, and scalable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Engineering with Precision</h3>
                <p className="text-gray-700 text-sm">Rigorous testing, validation, and optimization at every stage.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Real-World Focus</h3>
                <p className="text-gray-700 text-sm">Solutions designed for actual deployment conditions and constraints.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Long-Term Partnership</h3>
                <p className="text-gray-700 text-sm">Ongoing support and continuous improvement post-deployment.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="section-container bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <motion.div {...fadeIn} className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Your Next Success Story
          </h2>
          <p className="text-xl mb-8 text-blue-50">
            Partner with us to deploy production-ready edge AI and embedded systems solutions.
          </p>
          <a href="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl">
            Start Your Project
          </a>
        </motion.div>
      </section>
    </div>
  );
}
