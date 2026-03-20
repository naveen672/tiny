import { motion } from 'framer-motion';
import { FiEye, FiActivity, FiCpu, FiCheckCircle, FiDatabase, FiZap, FiTrendingUp, FiCloud, FiServer } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function AIMachineLearning() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: <FiEye size={28} />,
      title: 'Intelligent Safety & PPE Compliance Monitoring',
      description: 'Enhance workplace safety with automated monitoring systems that detect, track, and alert on PPE violations and unsafe conditions in real time - enabling proactive risk mitigation and regulatory compliance.',
      features: [
        'Real-time PPE detection and violation alerts',
        'Worker tracking across large operational areas',
        'Event-based notifications (SMS/Email integration)',
        'Historical incident logging and audit trails'
      ]
    },
    {
      icon: <FiZap size={28} />,
      title: 'Automated Defect Detection for Quality Control',
      description: 'Improve manufacturing quality and consistency with vision-based inspection systems that identify defects during production—reducing manual effort and minimizing downstream losses.',
      features: [
        'Inline defect detection during manufacturing stages',
        'High-accuracy visual inspection models',
        'Integration with existing QC workflows',
        'Continuous learning for evolving defect patterns'
      ]
    },
    {
      icon: <FiDatabase size={28} />,
      title: 'Analytics Chatbot for Operational Insights',
      description: 'Enable intuitive access to complex datasets through AI-powered conversational interfaces—allowing stakeholders to query and analyze data without technical expertise.',
      features: [
        'Natural language querying over enterprise data',
        'Context-aware insights from structured and unstructured sources',
        'Integration with production and sensor datasets',
        'Decision support through interactive responses and visualizations'
      ]
    },
    {
      icon: <FiTrendingUp size={28} />,
      title: 'Production Data Intelligence & Decision Systems',
      description: 'Unlock the full value of large-scale production data by transforming raw information into actionable insights for strategic and operational decision-making.',
      features: [
        'Processing and analysis of high-volume industrial data',
        'Trend analysis and performance optimization',
        'Custom dashboards and intelligent reporting',
        'Data-driven decision frameworks for operations teams'
      ]
    },
    {
      icon: <FiActivity size={28} />,
      title: 'Predictive Maintenance & Equipment Intelligence',
      description: 'Prevent unexpected downtime and extend asset life through advanced sensor analytics that detect early signs of equipment failure.',
      features: [
        'Vibration, temperature, and audio-based diagnostics',
        'Failure prediction and anomaly detection',
        'Maintenance scheduling optimization',
        'Asset performance monitoring dashboards'
      ]
    }
  ];

  const additionalServices = [
    {
      title: 'Data Analytics & Intelligence',
      description: 'Transforming raw data into actionable insights for informed decision-making and operational optimization.'
    },
    {
      title: 'Data Engineering & Scalable Pipelines',
      description: 'Designing scalable data pipelines and architectures for efficient data ingestion, processing, and management.'
    },
    {
      title: 'Advanced Data Modeling & Machine Learning',
      description: 'Building robust statistical and machine learning models to uncover patterns, predict outcomes, and drive business value.'
    },
    {
      title: 'ML Model Deployment & Performance Optimization',
      description: 'Deploying high-performance ML models across environments with a focus on scalability, efficiency, and reliability.'
    },
    {
      title: 'End-to-End ML System Design (Cloud)',
      description: 'Architecting and deploying scalable, cloud-native AI systems with integrated MLOps for continuous delivery and monitoring.'
    },
    {
      title: 'End-to-End ML System Design (On-Premise / Edge)',
      description: 'Designing secure, high-performance AI systems for on-premise and edge environments with full control over data and infrastructure.'
    }
  ];

  const platforms = [
    { name: 'NVIDIA Jetson', category: 'Edge AI' },
    { name: 'TensorRT', category: 'Inference' },
    { name: 'OpenVINO', category: 'Intel' },
    { name: 'TFLite Micro', category: 'MCU' },
    { name: 'Edge Impulse', category: 'TinyML' },
    { name: 'STM32 AI', category: 'MCU' },
    { name: 'Coral TPU', category: 'Edge' },
    { name: 'PyTorch Mobile', category: 'Mobile' }
  ];

  const mlCapabilities = [
    'Custom model architecture design',
    'Transfer learning & fine-tuning',
    'Model quantization (INT8, FP16)',
    'Neural architecture search',
    'Data augmentation strategies',
    'Real-time inference optimization',
    'Edge & cloud hybrid deployment',
    'Continuous learning pipelines'
  ];

  const dataPipeline = [
    {
      title: 'Data Ingestion & Processing',
      description: 'Scalable data collection from multiple sources with ETL pipelines using PySpark and Apache Airflow.',
      tools: ['Apache Airflow', 'PySpark', 'Kafka', 'PostgreSQL']
    },
    {
      title: 'Model Training & Optimization',
      description: 'Distributed training with hyperparameter tuning, model compression, and optimization for target hardware.',
      tools: ['PyTorch', 'TensorFlow', 'Optuna', 'Weights & Biases']
    },
    {
      title: 'Deployment & Monitoring',
      description: 'Containerized deployment with Kubernetes, model serving, and real-time performance monitoring.',
      tools: ['Kubernetes', 'KServe', 'Prometheus', 'Grafana']
    }
  ];

  const useCases = [
    {
      title: 'Manufacturing Quality Control',
      description: 'Real-time defect detection on production lines using computer vision with 99.5% accuracy.',
      metrics: ['99.5% Accuracy', '<50ms Latency', '24/7 Operation', '1000+ Units/Hour'],
      tech: 'YOLO v8, TensorRT, Jetson Nano'
    },
    {
      title: 'Predictive Maintenance',
      description: 'Vibration and acoustic analysis to predict equipment failures weeks in advance.',
      metrics: ['95% Prediction Rate', '30 Days Advance', '40% Cost Reduction', 'Zero Downtime'],
      tech: 'LSTM, Sensor Fusion, Edge Impulse'
    },
    {
      title: 'Workplace Safety',
      description: 'PPE detection systems ensuring compliance with safety regulations in real-time.',
      metrics: ['98% Detection Rate', 'Real-time Alerts', 'Privacy Compliant', 'Multi-camera'],
      tech: 'SSD MobileNet, OpenVINO, Edge AI'
    },
    {
      title: 'Smart Agriculture',
      description: 'Crop health monitoring and disease detection using drone imagery and ML.',
      metrics: ['92% Disease Detection', 'Early Warning', '20% Yield Increase', 'Automated'],
      tech: 'ResNet, Transfer Learning, Cloud AI'
    }
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="section-container bg-gradient-to-br from-brand-lightGrey/20 via-brand-lightBlue/10 to-brand-lightGrey/20">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-brand-darkBlue to-brand-lightBlue rounded-2xl flex items-center justify-center text-white mb-8 mx-auto">
            <FiCpu size={40} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI & Machine Learning
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Model design, optimization, and deployment for your workflows.
          </p>
        </motion.div>
      </section>

      {/* Core Services */}
      <section className="section-container">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI/ML Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Video Analytics & Data Intelligence for Industrial Operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <FiCheckCircle className="text-brand-darkBlue flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-container bg-gradient-to-br from-brand-lightGrey/20 to-brand-lightBlue/10">
        <motion.div {...fadeIn} className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Core Capabilities
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI/ML solutions from vision to cloud deployment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {additionalServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 card-hover"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Data Pipeline */}
      <section className="section-container bg-gradient-to-br from-brand-lightGrey/20 to-brand-lightBlue/10">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete ML Pipeline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From raw data to production-ready models
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {dataPipeline.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
            >
              <div className="flex items-start space-x-6">
                <div className="text-5xl font-bold text-brand-darkBlue/20 flex-shrink-0">
                  0{index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{stage.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{stage.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {stage.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-brand-lightBlue/20 text-brand-darkBlue rounded-full text-sm font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Platforms & Tools */}
      <section className="section-container">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Platforms & Frameworks
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert deployment across edge and cloud platforms
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
              className="bg-gradient-to-br from-brand-lightBlue/10 to-brand-lightGrey/20 rounded-xl p-6 border border-brand-lightBlue/30 text-center card-hover"
            >
              <div className="font-bold text-gray-900 mb-1">{platform.name}</div>
              <div className="text-sm text-gray-600">{platform.category}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ML Capabilities */}
      <section className="section-container bg-gradient-to-br from-brand-lightGrey/20 to-brand-lightBlue/10">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ML Engineering Capabilities
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mlCapabilities.map((capability, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white rounded-lg p-4 border border-gray-200"
              >
                <FiCpu className="text-brand-darkBlue flex-shrink-0" />
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
            Real-World Deployments
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            ML systems delivering measurable business impact
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
              <div className="grid grid-cols-2 gap-3 mb-6">
                {useCase.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-brand-lightBlue/20 rounded-lg p-3 border border-brand-lightBlue/30">
                    <div className="text-sm font-semibold">{metric}</div>
                  </div>
                ))}
              </div>
              <div className="text-sm text-white/70 font-mono">{useCase.tech}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Model Optimization */}
      <section className="section-container">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Edge AI Optimization
          </h2>
          <div className="bg-gradient-to-br from-brand-lightBlue/10 to-brand-lightGrey/20 rounded-2xl p-8 border border-brand-lightBlue/30">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Deploying ML models on edge devices requires careful optimization. We specialize in 
              reducing model size by up to 90% while maintaining accuracy through quantization, 
              pruning, and knowledge distillation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-darkBlue mb-2">10x</div>
                <div className="text-gray-700">Faster Inference</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-darkBlue mb-2">90%</div>
                <div className="text-gray-700">Size Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-darkBlue mb-2">&lt;1%</div>
                <div className="text-gray-700">Accuracy Loss</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="section-container bg-gradient-to-r from-brand-darkBlue to-brand-lightBlue text-white">
        <motion.div {...fadeIn} className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Deploy AI at the Edge?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's build intelligent systems that work where you need them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-brand-darkBlue hover:bg-gray-100">
              Get in Touch
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
