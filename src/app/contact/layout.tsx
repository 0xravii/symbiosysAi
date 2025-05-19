import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Symbiosis AI',
  description: 'Get in touch with our team to discuss how our AI solutions can help your business',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}