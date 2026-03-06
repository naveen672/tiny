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
      description: 'We specialize in deploying optimized ML models on energy-efficient, low-power processors such as STM32U5 and nRF52840.',
      features: ['STM32U5', 'nRF52840', 'Power optimization', 'Battery life']
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
      description: 'We extend our capability to advanced systems like the NVIDIA Jetson Nano, enabling scalable and secure AI solutions.',
      features: ['NVIDIA Jetson Nano', 'Scalable AI', 'Secure solutions', 'Production ready']
    },
    {
      icon: <FiLayers size={28} />,
      title: 'MLOps Pipelines',
      description: 'Building model pipelines using Kubeflow, Kubernetes, and KServe.',
      features: ['Kubeflow', 'Kubernetes', 'KServe', 'Automated pipelines']
    }
  ];

  const platforms = [
    { name: 'NVIDIA Jetson', specs: 'Nano, AGX, Xavier' },
    { name: 'STM32 AI', specs: 'Cortex-M series' },
    { name: 'nRF52/nRF91', specs: 'Nordic SoC' },
    { name: 'ESP32-S3', specs: 'Espressif' },
    { name: 'Coral Dev Board', specs: 'Edge TPU' },
    { name: 'Raspberry Pi', specs: 'Compute Module' }
  ];

  const architecture = [
    {
      layer: 'Device Layer',
      description: 'Sensors, actuators, and edge processing units running optimized ML models',
      tech: ['TinyML', 'TFLite', 'TensorRT', 'ONNX Runtime']
    },
    {
      layer: 'Edge Gateway',
      description: 'Local aggregation, preprocessing, and inference for multiple devices',
      tech: ['Jetson', 'Kubernetes Edge', 'MQTT', 'Time-series DB']
    },
    {
      layer: 'MLOps Infrastructure',
      description: 'Model training, versioning, deployment, and monitoring at scale',
      tech: ['Kubeflow', 'KServe', 'MLflow', 'Prometheus']
    },
    {
      layer: 'Cloud Integration (Optional)',
      description: 'Hybrid deployment with cloud backup, analytics, and model retraining',
      tech: ['AWS IoT', 'Azure IoT', 'GCP Cloud', 'S3/Blob Storage']
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
      solution: 'Edge AI vision systems with <50ms inference time, processing 1000+ parts per hour.',
      outcome: '99.5% defect detection, 40% reduction in waste, zero cloud costs.',
      stack: ['Jetson Xavier NX', 'TensorRT', 'YOLOv8', 'C++ Inference']
    },
    {
      title: 'Predictive Maintenance',
      challenge: 'Monitor industrial equipment in remote locations without internet connectivity.',
      solution: 'Sensor fusion ML models running on low-power MCUs with months of battery life.',
      outcome: '95% failure prediction, 30 days advance notice, 40% maintenance cost reduction.',
      stack: ['STM32U5', 'TFLite Micro', 'Sensor Fusion', 'LoRa']
    },
    {
      title: 'Healthcare Wearables',
      challenge: 'Continuous health monitoring with medical-grade accuracy and data privacy.',
      solution: 'On-device ML for heart rate variability, fall detection, and anomaly detection.',
      outcome: 'Medical certification, complete privacy, 7-day battery life.',
      stack: ['nRF52840', 'TinyML', 'BLE 5.0', 'PMIC']
    },
    {
      title: 'Smart Agriculture',
      challenge: 'Automated irrigation and pest detection in remote farms without internet.',
      solution: 'Solar-powered edge AI nodes with computer vision and environmental sensors.',
      outcome: '30% water savings, early pest detection, autonomous operation.',
      stack: ['ESP32-S3', 'Solar PMIC', 'Camera ML', 'LoRaWAN']
    }
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="section-container bg-gradient-to-br from-gray-50 via-cyan-50 to-blue-50">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-cyan-600 to-blue-500 rounded-2xl flex items-center justify-center text-white mb-8 mx-auto">
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
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <FiCheckCircle className="text-cyan-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-container bg-gradient-to-br from-gray-900 to-cyan-900 text-white">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Edge Computing?
          </h2>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
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
              <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-300 mb-4 mx-auto">
                {benefit.icon}
              </div>
              <div className="text-3xl font-bold mb-2">{benefit.metric}</div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-cyan-100 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Architecture Layers */}
      <section className="section-container bg-gradient-to-br from-gray-50 to-cyan-50">
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
                <div className="text-5xl font-bold text-cyan-600/20 flex-shrink-0">
                  0{index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{layer.layer}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{layer.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {layer.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium"
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

      {/* Supported Platforms */}
      <section className="section-container">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Edge Platforms We Deploy On
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200 text-center card-hover"
            >
              <div className="font-bold text-gray-900 text-lg mb-1">{platform.name}</div>
              <div className="text-sm text-gray-600">{platform.specs}</div>
            </div>
          ))}
        </motion.div>
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
              className="bg-gradient-to-br from-gray-50 to-cyan-50 rounded-2xl p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{useCase.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-sm font-semibold text-cyan-600 uppercase mb-2">The Challenge</div>
                  <p className="text-gray-700 leading-relaxed">{useCase.challenge}</p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-cyan-600 uppercase mb-2">Strategic Solution</div>
                  <p className="text-gray-700 leading-relaxed">{useCase.solution}</p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-cyan-600 uppercase mb-2">Core Outcomes</div>
                  <p className="text-gray-700 leading-relaxed">{useCase.outcome}</p>
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-600 uppercase mb-2">Technology Stack</div>
                <div className="flex flex-wrap gap-2">
                  {useCase.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white border border-cyan-200 text-gray-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MLOps Section */}
      <section className="section-container bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Enterprise MLOps for Edge
          </h2>
          <p className="text-xl text-cyan-100 mb-8 leading-relaxed text-center">
            Manage thousands of edge devices with our MLOps infrastructure built on Kubernetes, 
            Kubeflow, and KServe. Automated model deployment, monitoring, and updates at scale.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Automated Pipelines', description: 'CI/CD for model training and deployment' },
              { title: 'Fleet Management', description: 'Monitor and manage 10K+ devices' },
              { title: 'OTA Updates', description: 'Secure model updates over-the-air' }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-cyan-100 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="section-container bg-gradient-to-r from-cyan-600 to-blue-500 text-white">
        <motion.div {...fadeIn} className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Deploy Intelligence at the Edge
          </h2>
          <p className="text-xl mb-8 text-cyan-50">
            Build secure, offline-first edge AI systems that scale to thousands of devices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-cyan-600 hover:bg-gray-100">
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
