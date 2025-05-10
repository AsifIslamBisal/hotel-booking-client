import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: 'Discover Luxury Rooms',
    description: 'Book your perfect stay with just a few clicks.',
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 2,
    title: 'Comfort & Elegance',
    description: 'Enjoy the comfort of modern amenities.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 3,
    title: 'Your Dream Stay Awaits',
    description: 'Find the best deals and cozy rooms now.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80',
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
        >
          <div className="w-full h-full bg-gradient-to-b from-black/60 via-black/40 to-black/80 flex items-end justify-center">
            <div className="text-center px-4 pb-20 md:px-10">
              <motion.h1
                className="text-3xl md:text-6xl font-bold text-white drop-shadow-lg"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {slide.title}
              </motion.h1>
              <motion.p
                className="text-white text-lg md:text-xl mt-3 md:mt-6"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {slide.description}
              </motion.p>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <Link
                  to="/rooms"
                  className="inline-block mt-6 px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:scale-105 hover:bg-gray-200 transition-all duration-300"
                >
                  Explore Rooms
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Banner;
