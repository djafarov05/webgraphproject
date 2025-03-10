import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16 bg-apple-gray"
    >
      {/* Hero Section */}
      <div className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-apple-blue/5 to-apple-purple/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-6xl font-montserrat font-bold text-neutral-850 leading-tight"
              >
                Digital Creator & Visual Artist
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 text-xl text-gray-600 max-w-lg"
              >
                Transforming ideas into stunning visual experiences. Explore my world of digital creativity and artistic innovation.
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <Link
                  to="/gallery"
                  className="inline-flex items-center px-6 py-3 bg-apple-blue text-white font-semibold rounded-full hover:bg-apple-blue/90 transition-colors"
                >
                  View My Work
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </motion.div>
            </div>
            <div className="hidden md:block">
              <motion.img
                src="/jamal_logo_2_page-0001.png"
                alt="JamalTheCreator Logo"
                className="w-full max-w-md mx-auto animate-float"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-montserrat font-bold text-neutral-850">About Me</h2>
            <p className="mt-6 text-lg text-gray-600">
              I'm a passionate digital creator specializing in visual storytelling through various mediums.
              My work combines creativity with technical expertise to deliver unique and impactful digital experiences.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;