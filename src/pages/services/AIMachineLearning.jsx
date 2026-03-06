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
      title: 'Advanced Computer Vision',
      description: 'Proficient in building advanced object detection algorithms and deep learning models such as SSD and YOLO.',
      features: ['SSD models', 'YOLO detection', 'Custom CNN', 'Real-time inference']
    },
    {
      icon: <FiZap size={28} />,
      title: 'Optimized Model Deployment',
      description: 'Extensive experience with TinyML, TensorRT, and OpenVINO.',
      features: ['TinyML', 'TensorRT', 'OpenVINO', 'Model optimization']
    },
    {
      icon: <FiCpu size={28} />,
      title: 'Production-Ready Models',
      description: 'Deploying on cloud and on edge devices like NVIDIA AGX/IGX and Jetson Nano.',
      features: ['NVIDIA AGX/IGX', 'Jetson Nano', 'Cloud deployment', 'Edge inference']
    },
    {
      icon: <FiActivity size={28} />,
      title: 'Multi-Modal Sensor Expertise',
      description: 'Working with accelerometers, temperature sensors, microphones and more.',
      features: ['Accelerometers', 'Temperature sensors', 'Microphones', 'Sensor fusion']
    },
    {
      icon: <FiTrendingUp size={28} />,
      title: 'Advanced Feature Extraction',
      description: 'Utilizing Spectral Analysis (FFT), Spectrograms, and statistical features.',
      features: ['FFT analysis', 'Spectrograms', 'Statistical features', 'Time-series']
    },
    {
      icon: <FiCpu size={28} />,
      title: 'ML for MCUs',
      description: 'Optimizing and deploying models on resource-constrained microcontrollers for edge intelligence.',
      features: ['TFLite Micro', 'Model compression', 'MCU optimization', 'Edge intelligence']
    },
    {
      icon: <FiDatabase size={28} />,
      title: 'Data Ingestion & Processing',
      description: 'Handling structured and semi-structured data using cloud technologies.',
      features: ['Cloud data processing', 'ETL pipelines', 'Data transformation', 'Batch processing']
    },
    {
      icon: <FiCloud size={28} />,
      title: 'Cloud Deployment',
      description: 'Dockerizing applications and deploying them on GCP and Azure.',
      features: ['Docker containers', 'GCP deployment', 'Azure deployment', 'CI/CD pipelines']
    },
    {
      icon: <FiServer size={28} />,
      title: 'Big Data & ETL',
      description: 'Leveraging PySpark and Apache Airflow for robust data pipelines.',
      features: ['PySpark', 'Apache Airflow', 'Data pipelines', 'Big data processing']
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
      <section className="section-container bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl flex items-center justify-center text-white mb-8 mx-auto">
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
            ML Solutions We Build
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end machine learning from model development to production deployment
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
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <FiCheckCircle className="text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Data Pipeline */}
      <section className="section-container bg-gradient-to-br from-gray-50 to-purple-50">
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
                <div className="text-5xl font-bold text-purple-600/20 flex-shrink-0">
                  0{index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{stage.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{stage.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {stage.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
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
                <FiCpu className="text-purple-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{capability}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Use Cases */}
      <section className="section-container bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real-World Deployments
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
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
              <p className="text-purple-100 mb-6 leading-relaxed">{useCase.description}</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {useCase.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-purple-500/20 rounded-lg p-3 border border-purple-400/30">
                    <div className="text-sm font-semibold">{metric}</div>
                  </div>
                ))}
              </div>
              <div className="text-sm text-purple-200 font-mono">{useCase.tech}</div>
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
                <div className="text-4xl font-bold text-purple-600 mb-2">10x</div>
                <div className="text-gray-700">Faster Inference</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">90%</div>
                <div className="text-gray-700">Size Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">&lt;1%</div>
                <div className="text-gray-700">Accuracy Loss</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="section-container bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <motion.div {...fadeIn} className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Deploy AI at the Edge?
          </h2>
          <p className="text-xl mb-8 text-purple-50">
            Let's build intelligent systems that work where you need them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-purple-600 hover:bg-gray-100">
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
