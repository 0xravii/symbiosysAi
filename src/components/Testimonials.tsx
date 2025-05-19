import { motion } from 'framer-motion';
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      role: 'Digital Artist',
      image: '/images/testimonials/profile1.jpg',
      content: 'Symbiosys Ai has completely transformed my creative workflow. The quality of generated images is outstanding and saves me hours of work.',
    },
    {
      id: 2,
      name: 'Jason Roberts',
      role: 'Content Designer',
      image: '/images/testimonials/profile2.jpg',
      content: 'As a content designer, I rely on Symbiosys Ai daily. The platform is intuitive and the results consistently exceed my expectations.',
    },
    {
      id: 3,
      name: 'Emily Zhang',
      role: 'Art Director',
      image: '/images/testimonials/profile3.jpg',
      content: 'The versatility of Symbiosys Ai is impressive. From concept art to final designs, it has become an essential tool in our creative process.',
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Users Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary-dark rounded-xl p-6 shadow-lg border border-gray-800"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4 overflow-hidden rounded-full border-2 border-primary-600">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                <p className="text-primary-500 text-sm mb-4">{testimonial.role}</p>
                <p className="text-gray-300 text-sm">{testimonial.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;