import React from 'react';
import { Twitter, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const SocialLinks: React.FC = () => {
  const socialLinks = [
    { icon: <Twitter size={20} />, url: '#', label: 'Twitter' },
    { icon: <Facebook size={20} />, url: '#', label: 'Facebook' },
    { icon: <Instagram size={20} />, url: '#', label: 'Instagram' },
    { icon: <Youtube size={20} />, url: '#', label: 'YouTube' },
    { icon: <Linkedin size={20} />, url: '#', label: 'LinkedIn' },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((link, index) => (
        <a 
          key={index}
          href={link.url}
          aria-label={link.label}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 text-gray-300 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;