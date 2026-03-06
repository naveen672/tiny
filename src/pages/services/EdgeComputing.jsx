import { motion } from 'framer-motion';
import { FiZap, FiShield, FiLayers, FiCheckCircle, FiServer, FiLock, FiCpu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function EdgeComputing() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: <FiZap size={28} />,
      title: 'End-to-End Embedded ML Pipelines',
      description: 'Expertise in the full lifecycle from sensor data collection and preprocessing to on-device predictions.',
      features: ['Data collection', 'Preprocessing', 'On-device inference', 'Real-time predictions']
    },
    {
      icon: <FiShield size={28} />,
      title: 'Core Focus',
      description: 'Our approach emphasizes security, hardware compatibility, and cost-effectiveness in every solution.',
      features: ['Security first', 'Hardware compatibility', 'Cost-effective', 'Scalable solutions']
    },
    {
      icon: <FiServer size={28} />,
      title: 'Low-Power Specialization',
      description: 'We specialize in deploying optimized ML models on energy-efficient, low-power processors.',
      features: ['Ultra-low power consumption', 'Extended battery life', 'Power optimization', 'Energy-efficient design']
    },
    {
      icon: <FiLock size={28} />,
      title: 'Fully Offline Operation',
      description: 'Our solutions ensure reliable performance with no dependency on internet connectivity.',
      features: ['100% offline', 'No cloud needed', 'Data privacy', 'Reliable operation']
    },
    {
      icon: <FiCpu size={28} />,
      title: 'Advanced Edge Platforms',
      description: 'We build solutions on advanced edge computing systems, enabling scalable and secure AI deployment.',
      features: ['Scalable architecture', 'Secure AI deployment', 'Industrial-grade reliability', 'Production ready']
    },
    {
      icon: <FiLayers size={28} />,
      title: 'MLOps Pipelines',
      description: 'Building automated model deployment and monitoring pipelines for edge infrastructure.',
      features: ['Automated deployment', 'Continuous monitoring', 'Model versioning', 'Streamlined operations']
    }
  ];

  const architecture = [
    {
      layer: 'Device Layer',
      description: 'Sensors, actuators, and edge processing units running optimized ML models for real-time inference'
    },
    {
      layer: 'Edge Gateway',
      description: 'Local aggregation, preprocessing, and inference for multiple devices with secure communication protocols'
    },
    {
      layer: 'MLOps Infrastructure',
      description: 'Model training, versioning, deployment, and monitoring at scale with automated workflows'
    },
    {
      layer: 'Cloud Integration (Optional)',
      description: 'Hybrid deployment with cloud backup, analytics, and model retraining capabilities'
    }
  ];

  const benefits = [
    {
      icon: <FiZap size={24} />,
      title: 'Ultra-Low Latency',
      description: 'Real-time inference with <10ms latency. No network dependency.',
      metric: '<10ms'
    },
    {
      icon: <FiShield size={24} />,
      title: 'Enhanced Security',
      description: 'Data never leaves the device. Air-gapped operation for sensitive environments.',
      metric: '100% Offline'
    },
    {
      icon: <FiServer size={24} />,
      title: 'Cost Effective',
      description: 'Eliminate cloud costs. One-time hardware investment with years of operation.',
      metric: '90% Cost Savings'
    },
    {
      icon: <FiLock size={24} />,
      title: 'Reliable Operation',
      description: 'Works in remote locations without internet. Proven 99.9% uptime.',
      metric: '99.9% Uptime'
    }
  ];

  const useCases = [
    {
      title: 'Smart Manufacturing',
      challenge: 'Real-time quality control on production lines with no cloud latency.',
      solution: 'Edge AI vision systems with ultra-low inference time, processing 1000+ parts per hour.',
      outcome: '99.5% defect detection, 40% reduction in waste, zero cloud costs.'
    },
    {
      title: 'Predictive Maintenance',
      challenge: 'Monitor industrial equipment in remote locations without internet connectivity.',
      solution: 'Sensor fusion ML models running on low-power processors with months of battery life.',
      outcome: '95% failure prediction, 30 days advance notice, 40% maintenance cost reduction.'
    },
    {
      title: 'Healthcare Wearables',
      challenge: 'Continuous health monitoring with medical-grade accuracy and data privacy.',
      solution: 'On-device ML for heart rate variability, fall detection, and anomaly detection.',
      outcome: 'Medical certification, complete privacy, 7-day battery life.'
    },
    {
      title: 'Smart Agriculture',
      challenge: 'Automated irrigation and pest detection in remote farms without internet.',
      solution: 'Solar-powered edge AI nodes with computer vision and environmental sensors.',
      outcome: '30% water savings, early pest detection, autonomous operation.'
    }
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="section-container bg-gradient-to-br from-brand-lightGrey/20 via-brand-lightBlue/10 to-brand-lightGrey/20">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-brand-darkBlue to-brand-lightBlue rounded-2xl flex items-center justify-center text-white mb-8 mx-auto">
            <FiZap size={40} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Edge Computing Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            AI/ML on IoT devices for real-time, on-device decisions.
          </p>
        </motion.div>
      </section>

      {/* Core Services */}
      <section className="section-container">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete Edge AI Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From hardware to MLOps, we build end-to-end edge computing solutions
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
              <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <FiCheckCircle className="text-brand-lightBlue flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-container bg-gradient-to-br from-gray-900 to-brand-navyBlue text-white">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Edge Computing?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Fundamental advantages of edge-based AI systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
            >
              <div className="w-14 h-14 bg-brand-lightBlue/20 rounded-xl flex items-center justify-center text-brand-lightBlue mb-4 mx-auto">
                {benefit.icon}
              </div>
              <div className="text-3xl font-bold mb-2">{benefit.metric}</div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Architecture Layers */}
      <section className="section-container bg-gradient-to-br from-brand-lightGrey/20 to-brand-lightBlue/10">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Edge AI Architecture
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Layered approach from device to cloud
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          {architecture.map((layer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
            >
              <div className="flex items-start space-x-6">
                <div className="text-5xl font-bold text-brand-lightBlue/20 flex-shrink-0">
                  0{index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{layer.layer}</h3>
                  <p className="text-gray-700 leading-relaxed">{layer.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-container bg-white">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Production Deployments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world edge computing solutions delivering measurable results
          </p>
        </motion.div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-brand-lightGrey/20 to-brand-lightBlue/10 rounded-2xl p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{useCase.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-sm font-semibold text-brand-lightBlue uppercase mb-2">The Challenge</div>
                  <p className="text-gray-700 leading-relaxed">{useCase.challenge}</p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-brand-lightBlue uppercase mb-2">Strategic Solution</div>
                  <p className="text-gray-700 leading-relaxed">{useCase.solution}</p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-brand-lightBlue uppercase mb-2">Core Outcomes</div>
                  <p className="text-gray-700 leading-relaxed">{useCase.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MLOps Section */}
      <section className="section-container bg-gradient-to-br from-brand-deepNavy to-brand-navyBlue text-white">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Enterprise MLOps for Edge
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed text-center">
            Manage thousands of edge devices with our enterprise-grade MLOps infrastructure. 
            Automated model deployment, monitoring, and updates at scale.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Automated Pipelines', description: 'CI/CD for model training and deployment' },
              { title: 'Fleet Management', description: 'Monitor and manage 10K+ devices' },
              { title: 'OTA Updates', description: 'Secure model updates over-the-air' }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="section-container bg-gradient-to-r from-brand-darkBlue to-brand-lightBlue text-white">
        <motion.div {...fadeIn} className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Deploy Intelligence at the Edge
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Build secure, offline-first edge AI systems that scale to thousands of devices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-brand-darkBlue hover:bg-gray-100">
              Get Started
            </Link>
            <Link to="/case-studies" className="btn-secondary border-2 border-white hover:bg-white/10">
              View Case Studies
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
