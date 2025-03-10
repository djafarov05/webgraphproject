import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    {
      src: '/public/bubble.png',
      title: 'Bubble Typography',
      description: '3D bubble text design exploration'
    },
    {
      src: '/public/fluffy.png',
      title: 'Fluffy Text Effect',
      description: 'Experimental typography with texture'
    },
    {
      src: '/public/shark.png',
      title: 'Minimalist Shark',
      description: 'Clean vector illustration'
    },
    {
      src: '/jamal logo 2_page-0001.png',
      title: 'Brand Identity',
      description: 'Personal brand logo design'
    },
    {
      src: '/public/squares.png',
      title: 'Geometric Composition',
      description: 'Abstract design with shapes and colors'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-16 bg-apple-gray"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-montserrat font-bold text-neutral-850 mb-12">Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <p className="text-sm opacity-90 mt-2">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Gallery;