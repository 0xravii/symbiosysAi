// 'use client';

// Uncomment the Image import since we need it
//import { motion } from 'framer-motion';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Symbiosis AI',
  description: 'Learn about our mission, vision, and the team behind Symbiosis AI',
};

export default function About() {
  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      bio: 'Ph.D. in Machine Learning with 15+ years of experience in AI research and implementation.',
      image: '/ai-pattern.svg'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      bio: 'Former tech lead at major tech companies with expertise in scalable AI systems.',
      image: '/ai-3d-background.svg'
    },
    {
      name: 'Emma Johnson',
      role: 'Head of Data Science',
      bio: 'Specialist in predictive analytics and big data processing technologies.',
      image: '/window.svg'
    },
    {
      name: 'David Kim',
      role: 'AI Solutions Architect',
      bio: 'Expert in designing custom AI solutions for enterprise clients.',
      image: '/file.svg'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Add content here */}
      {/* Use the team data here, for example: */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                {/* Replace img with Next.js Image component */}
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-center">{member.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 text-center mb-2">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-300 text-center">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}