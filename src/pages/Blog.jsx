import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiExternalLink, FiFileText, FiBookOpen } from 'react-icons/fi';

export default function Blog() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const blogs = [
    {
      title: 'Bird Sound Classifier on the Edge',
      platform: 'Medium',
      author: 'Errol Joshua',
      url: 'https://medium.com/@errol-joshua7/bird-sound-classifier-on-the-edge-860de854f78e',
      description: 'Explore how we built an edge-based bird sound classification system that processes audio signals in real-time.',
      tags: ['TinyML', 'Audio Processing', 'Edge AI']
    },
    {
      title: 'Edge AI: Vision-Based Bolt Detection on NVIDIA Jetson Nano',
      platform: 'Hackster.io',
      url: 'https://www.hackster.io/tiny-prism-labs/edge-ai-vision-based-bolt-detection-on-nvidia-jetson-nano-abb49f',
      description: 'Production-ready real-time bolt detection system for high-speed manufacturing lines using computer vision.',
      tags: ['Computer Vision', 'NVIDIA Jetson', 'Manufacturing']
    },
    {
      title: 'EdgeAI for Predictive Maintenance in Tormach CNC',
      platform: 'Hackster.io',
      url: 'https://www.hackster.io/tiny-prism-labs/edgeai-for-predictive-maintenance-in-tormach-cnc-30e9e0',
      description: 'Implementing predictive maintenance algorithms on CNC machines using edge AI for reduced downtime.',
      tags: ['Predictive Maintenance', 'Industrial IoT', 'Edge AI']
    },
    {
      title: 'TinyML Meets LLM: Voice Control on the Edge',
      platform: 'Hackster.io',
      url: 'https://www.hackster.io/tiny-prism-labs/tinyml-meets-llm-voice-control-on-the-edge-e1e58d',
      description: 'Combining TinyML with Large Language Models to enable sophisticated voice control on resource-constrained devices.',
      tags: ['TinyML', 'LLM', 'Voice Control', 'Edge Computing']
    },
    {
      title: 'Bird Sound Classifier on the Edge',
      platform: 'Hackster.io',
      url: 'https://www.hackster.io/409822/bird-sound-classifier-on-the-edge-583563',
      description: 'A comprehensive guide to building an embedded bird sound classification system for wildlife monitoring.',
      tags: ['TinyML', 'Audio ML', 'Wildlife Tech']
    }
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="section-container bg-gradient-to-br from-brand-lightGrey/20 via-brand-lightBlue/10 to-brand-lightGrey/30">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-darkBlue to-brand-lightBlue rounded-2xl mb-6">
            <FiBookOpen size={32} className="text-white" />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Blog & Updates
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
            Insights, tutorials, and technical articles from our engineering team. 
            Learn about our latest projects and deep dives into edge AI and embedded systems.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="section-container bg-gradient-to-r from-brand-darkBlue to-brand-lightBlue text-white">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">
          <motion.div {...fadeIn}>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{blogs.length}+</div>
            <div className="text-white/80 text-sm sm:text-base">Technical Articles</div>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">10K+</div>
            <div className="text-white/80 text-sm sm:text-base">Readers</div>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="col-span-2 lg:col-span-1">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">2</div>
            <div className="text-white/80 text-sm sm:text-base">Publishing Platforms</div>
          </motion.div>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="section-container">
        <motion.div {...fadeIn} className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest Articles
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Technical deep dives, project showcases, and engineering insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <motion.a
              key={index}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden card-hover group"
            >
              <div className="p-6 sm:p-8">
                {/* Platform Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <FiFileText className="text-brand-darkBlue" size={20} />
                    <span className="text-sm font-semibold text-brand-darkBlue uppercase">
                      {blog.platform}
                    </span>
                  </div>
                  <FiExternalLink className="text-gray-400 group-hover:text-brand-darkBlue transition-colors" size={20} />
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-darkBlue transition-colors">
                  {blog.title}
                </h3>

                {/* Author */}
                {blog.author && (
                  <p className="text-sm text-gray-600 mb-3">
                    by <span className="font-semibold">{blog.author}</span>
                  </p>
                )}

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-4">
                  {blog.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-brand-lightGrey/30 text-brand-darkBlue rounded-lg text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <div className="mt-6 flex items-center text-brand-darkBlue font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Read Article</span>
                  <FiExternalLink className="ml-2" size={16} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="section-container bg-gradient-to-br from-brand-lightGrey/20 to-brand-lightBlue/10">
        <motion.div {...fadeIn} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Content Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Topics we cover in our technical writing
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { name: 'TinyML', icon: '🧠' },
            { name: 'Computer Vision', icon: '👁️' },
            { name: 'Edge AI', icon: '⚡' },
            { name: 'IoT', icon: '🔗' },
            { name: 'Embedded Systems', icon: '💾' },
            { name: 'Predictive Maintenance', icon: '🔧' },
            { name: 'Audio Processing', icon: '🎵' },
            { name: 'Industrial ML', icon: '🏭' }
          ].map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:border-brand-lightBlue hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-2">{category.icon}</div>
              <div className="font-semibold text-gray-900">{category.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Publishing Platforms */}
      <section className="section-container">
        <motion.div {...fadeIn} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Where We Publish
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.a
            href="https://medium.com/@errol-joshua7"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-2xl p-8 text-center card-hover group"
          >
            <div className="text-5xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-darkBlue transition-colors">
              Medium
            </h3>
            <p className="text-gray-700 mb-4">
              In-depth technical articles and engineering insights
            </p>
            <div className="flex items-center justify-center text-brand-darkBlue font-semibold group-hover:translate-x-2 transition-transform">
              <span>Visit Profile</span>
              <FiExternalLink className="ml-2" size={16} />
            </div>
          </motion.a>

          <motion.a
            href="https://www.hackster.io/tiny-prism-labs"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-2xl p-8 text-center card-hover group"
          >
            <div className="text-5xl mb-4">🔨</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-darkBlue transition-colors">
              Hackster.io
            </h3>
            <p className="text-gray-700 mb-4">
              Project tutorials, hardware guides, and technical showcases
            </p>
            <div className="flex items-center justify-center text-brand-darkBlue font-semibold group-hover:translate-x-2 transition-transform">
              <span>Visit Profile</span>
              <FiExternalLink className="ml-2" size={16} />
            </div>
          </motion.a>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container bg-gradient-to-r from-brand-darkBlue to-brand-lightBlue text-white">
        <motion.div {...fadeIn} className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Want to Collaborate?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            We're always excited to share our knowledge and collaborate on innovative projects.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-brand-darkBlue font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
