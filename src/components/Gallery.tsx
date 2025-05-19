import { motion } from 'framer-motion';
import Image from 'next/image';

const Gallery = () => {
  // Sample gallery images - replace with your actual images
  const galleryImages = [
    { id: 1, src: '/images/gallery/ai-art-1.jpg', alt: 'AI Generated Art 1' },
    { id: 2, src: '/images/gallery/ai-art-2.jpg', alt: 'AI Generated Art 2' },
    { id: 3, src: '/images/gallery/ai-art-3.jpg', alt: 'AI Generated Art 3' },
    { id: 4, src: '/images/gallery/ai-art-4.jpg', alt: 'AI Generated Art 4' },
    { id: 5, src: '/images/gallery/ai-art-5.jpg', alt: 'AI Generated Art 5' },
    { id: 6, src: '/images/gallery/ai-art-6.jpg', alt: 'AI Generated Art 6' },
    { id: 7, src: '/images/gallery/ai-art-7.jpg', alt: 'AI Generated Art 7' },
    { id: 8, src: '/images/gallery/ai-art-8.jpg', alt: 'AI Generated Art 8' },
    { id: 9, src: '/images/gallery/ai-art-9.jpg', alt: 'AI Generated Art 9' },
  ];

  return (
    <section className="py-20 bg-secondary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Created by Pixel<span className="text-primary-600">Mind</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg aspect-square"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;