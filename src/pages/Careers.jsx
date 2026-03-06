import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiTrendingUp, FiUsers, FiBook, FiCoffee } from 'react-icons/fi';

export default function Careers() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const benefits = [
    {
      icon: <FiCode size={28} />,
      title: 'Cutting-Edge Technology',
      description: 'Work on advanced embedded systems, TinyML, and edge AI projects using the latest tools and platforms.'
    },
    {
      icon: <FiTrendingUp size={28} />,
      title: 'Continuous Learning',
      description: 'Access to courses, conferences, and certifications. We invest in your professional growth.'
    },
    {
      icon: <FiUsers size={28} />,
      title: 'Collaborative Culture',
      description: 'Work with a team of passionate engineers solving real-world problems across industries.'
    },
    {
      icon: <FiCpu size={28} />,
      title: 'Impactful Work',
      description: 'Build systems that are deployed in production, powering critical applications worldwide.'
    },
    {
      icon: <FiBook size={28} />,
      title: 'R&D Focus',
      description: 'Contribute to research papers, open-source projects, and innovative product development.'
    },
    {
      icon: <FiCoffee size={28} />,
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements, competitive compensation, and a supportive work environment.'
    }
  ];

  const positions = [
    {
      title: 'Embedded Systems Engineer',
      type: 'Full-time',
      experience: '2-5 years',
      skills: ['C/C++', 'RTOS', 'ARM Cortex-M', 'PCB Design', 'BLE/Wi-Fi'],
      description: 'Design and develop firmware for low-power MCUs and IoT devices.'
    },
    {
      title: 'Machine Learning Engineer',
      type: 'Full-time',
      experience: '3-6 years',
      skills: ['Python', 'PyTorch/TensorFlow', 'Computer Vision', 'TinyML', 'MLOps'],
      description: 'Build and optimize ML models for edge deployment and production systems.'
    },
    {
      title: 'Hardware Engineer',
      type: 'Full-time',
      experience: '2-4 years',
      skills: ['PCB Design', 'Altium/KiCAD', 'Signal Integrity', 'Power Electronics', 'RF'],
      description: 'Design custom hardware solutions from schematics to production-ready boards.'
    },
    {
      title: 'Edge AI Engineer',
      type: 'Full-time',
      experience: '3-5 years',
      skills: ['TensorRT', 'ONNX', 'Jetson', 'Model Optimization', 'C++/Python'],
      description: 'Optimize and deploy AI models on edge devices with real-time constraints.'
    },
    {
      title: 'DevOps/MLOps Engineer',
      type: 'Full-time',
      experience: '3-6 years',
      skills: ['Kubernetes', 'Docker', 'CI/CD', 'Kubeflow', 'Python'],
      description: 'Build and maintain ML infrastructure and deployment pipelines.'
    },
    {
      title: 'Research Engineer (Internship)',
      type: 'Internship',
      experience: '0-1 year',
      skills: ['ML/DL', 'Python', 'Research', 'Problem Solving'],
      description: 'Work on cutting-edge research projects in TinyML and edge computing.'
    }
  ];

  const values = [
    'Technical excellence over shortcuts',
    'Production readiness, not just prototypes',
    'Continuous learning and experimentation',
    'Collaboration and knowledge sharing',
    'Customer-centric engineering',
    'Ethical AI and responsible technology'
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="section-container bg-gradient-to-br from-brand-lightGrey/20 via-brand-lightBlue/10 to-brand-lightGrey/30">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center px-4">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Join Our Team
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
            Build the future of edge intelligence with a team of passionate engineers. 
            Work on cutting-edge projects that deploy intelligence to millions of devices.
          </p>
        </motion.div>
      </section>

      {/* Why Join */}
      <section className="section-container">
        <motion.div {...fadeIn} className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Join Tiny Prism Labs
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            More than just a job—an opportunity to work on technology that matters
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 card-hover"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-darkBlue to-brand-lightBlue rounded-xl flex items-center justify-center text-white mb-6">
                {benefit.icon}
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Culture & Values */}
      <section className="section-container bg-gradient-to-br from-brand-deepNavy to-brand-navyBlue text-white">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
            Our Engineering Culture
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-12 text-center leading-relaxed">
            We're building a culture of excellence, innovation, and continuous learning. 
            Here's what we value:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
              >
                <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                <span className="text-lg">{value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Open Positions */}
      <section className="section-container">
        <motion.div {...fadeIn} className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Open Positions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in building intelligent edge systems
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="px-3 py-1 bg-brand-lightBlue/20 text-brand-navyBlue rounded-full font-medium">
                      {position.type}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium">
                      {position.experience}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">{position.description}</p>
              <div className="mb-4">
                <div className="text-sm font-semibold text-gray-600 uppercase mb-2">
                  Required Skills
                </div>
                <div className="flex flex-wrap gap-2">
                  {position.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-brand-lightGrey/20 to-brand-lightBlue/10 border border-brand-lightBlue/30 text-gray-800 rounded-lg text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="#apply"
                className="inline-block px-6 py-3 bg-brand-darkBlue text-white font-medium rounded-lg hover:bg-brand-navyBlue transition-colors"
              >
                Apply Now
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="section-container bg-gradient-to-br from-brand-lightGrey/20 to-brand-lightBlue/10">
        <motion.div {...fadeIn} className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            Apply Now
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Send us your resume and LinkedIn profile
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91 12345 67890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Position *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Position</option>
                    {positions.map((pos, idx) => (
                      <option key={idx} value={pos.title}>{pos.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  LinkedIn Profile URL
                </label>
                <input
                  type="url"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Resume/CV * (PDF, DOC, DOCX - Max 5MB)
                </label>
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Cover Letter / Why do you want to join us?
                </label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your experience and why you'd be a great fit..."
                ></textarea>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  required
                  className="mt-1"
                  id="privacy"
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  I agree to the processing of my personal data for recruitment purposes and 
                  understand that my information will be stored securely.
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-brand-darkBlue to-brand-lightBlue text-white font-semibold rounded-lg hover:from-brand-navyBlue hover:to-brand-lightBlue transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Submit Application
              </button>
            </form>
          </div>

          <p className="mt-6 text-center text-gray-600">
            Or email your resume directly to{' '}
            <a href="mailto:careers@tinyprismlabs.com" className="text-brand-darkBlue hover:underline font-semibold">
              careers@tinyprismlabs.com
            </a>
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="section-container bg-gradient-to-r from-brand-darkBlue to-brand-lightBlue text-white">
        <motion.div {...fadeIn} className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Don't See Your Role?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            We're always looking for talented engineers. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <a
            href="mailto:careers@tinyprismlabs.com"
            className="inline-block px-8 py-4 bg-white text-brand-darkBlue font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
          >
            Contact Us
          </a>
        </motion.div>
      </section>
    </div>
  );
}
