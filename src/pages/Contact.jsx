import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiArrowRight } from 'react-icons/fi';

export default function Contact() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      title: 'Email',
      details: ['mahesh@tinyprismlabs.com', 'ajkj@tinyprismlabs.com'],
      action: 'mailto:mahesh@tinyprismlabs.com'
    },
    {
      icon: <FiPhone size={24} />,
      title: 'Phone',
      details: ['+91 8553213634', '+91 8123577974'],
      action: 'tel:+918553213634'
    },
    {
      icon: <FiMapPin size={24} />,
      title: 'Office',
      details: ['Manipal, Karnataka', 'India - 576104'],
      action: 'https://maps.app.goo.gl/poY5KheBExA14ucL6'
    }
  ];

  const offices = [
    {
      city: 'Manipal',
      address: 'Manipal-Gok Bio incubator 1st Floor, Advanced Research Center, Manipal, Karnataka - 576104, India',
      isHeadquarters: true,
      mapLink: 'https://maps.app.goo.gl/poY5KheBExA14ucL6'
    }
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="section-container bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center px-4">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
            Let's discuss how we can help you deploy intelligent edge systems. 
            Our team is ready to answer your questions and explore partnership opportunities.
          </p>
        </motion.div>
      </section>

      {/* Contact Cards */}
      <section className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 text-center card-hover"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-6 mx-auto">
                {info.icon}
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-700 mb-1 text-sm sm:text-base">
                  {info.action ? (
                    <a href={info.action} className="hover:text-blue-600 transition-colors">
                      {detail}
                    </a>
                  ) : (
                    detail
                  )}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-container bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>

            <form className="space-y-6 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+91 12345 67890"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  What are you interested in? *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="embedded">Embedded Systems Design</option>
                  <option value="ai-ml">AI & Machine Learning</option>
                  <option value="edge">Edge Computing Solutions</option>
                  <option value="consulting">Technical Consulting</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your project requirements, timeline, and any specific technical challenges..."
                ></textarea>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  required
                  className="mt-1"
                  id="consent"
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  I agree to receive communications from Tiny Prism Labs and understand 
                  that I can unsubscribe at any time. *
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <FiSend />
              </button>
            </form>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What to Expect
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'Quick Response',
                    description: 'We typically respond within 24 hours on business days.'
                  },
                  {
                    title: 'Technical Discussion',
                    description: 'Initial consultation to understand your requirements and constraints.'
                  },
                  {
                    title: 'Proposal',
                    description: 'Detailed technical proposal with timeline and cost estimates.'
                  },
                  {
                    title: 'Partnership',
                    description: 'Collaborative development with regular updates and milestones.'
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Looking for Support?
              </h3>
              <p className="mb-6">
                Existing customers can reach out to our support team for technical assistance 
                and project updates.
              </p>
              <a
                href="mailto:support@tinyprismlabs.com"
                className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Support
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">10:00 AM - 2:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-container">
        <motion.div {...fadeIn} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Office
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {offices.map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{office.city}</h3>
                    {office.isHeadquarters && (
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                        Headquarters
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 flex items-start space-x-2">
                  <FiMapPin className="mt-1 flex-shrink-0 text-blue-600" />
                  <span>{office.address}</span>
                </p>
                
                {/* Google Maps Embed */}
                <div className="rounded-xl overflow-hidden border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.025!2d74.78889!3d13.34963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca4d3f3f3f3f3%3A0x1234567890abcdef!2sManipal-Gok%20Bio%20incubator%2C%20Manipal!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  ></iframe>
                </div>
                
                {/* Google Maps Link */}
                <a
                  href={office.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors mt-4"
                >
                  <FiMapPin className="text-xl" />
                  <span>Open in Google Maps</span>
                  <FiArrowRight className="text-lg" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-container bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <motion.div {...fadeIn} className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-50">
            Schedule a consultation with our engineering team to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@tinyprismlabs.com"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
            >
              Email Us
            </a>
            <a
              href="tel:+911234567890"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Call Us
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
