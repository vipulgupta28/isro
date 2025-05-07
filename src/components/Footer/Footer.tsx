import React from 'react';
import { MapPin, Phone, Mail, Rocket } from 'lucide-react';
import SocialLinks from './SocialLinks';
import FooterLinks from './FooterLinks';
import Newsletter from './NewsLetter';
import SpaceParticles from './SpaceParticles';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { text: 'About ISRO', url: '#' },
    { text: 'Missions', url: '#' },
    { text: 'Research', url: '#' },
    { text: 'Careers', url: '#' },
    { text: 'Publications', url: '#' },
  ];

  const resourceLinks = [
    { text: 'Image Gallery', url: '#' },
    { text: 'Press Releases', url: '#' },
    { text: 'Space Applications', url: '#' },
    { text: 'Technology Transfer', url: '#' },
    { text: 'Academic Collaboration', url: '#' },
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Animated space particles background */}
      <SpaceParticles />
      
      {/* Top footer section */}
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and about */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Rocket className="text-indigo-400" size={28} />
              <span className="font-bold text-2xl tracking-wider">ISRO</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Indian Space Research Organisation is the national space agency of India, 
              dedicated to space science, engineering, and exploration for national development.
            </p>
            <div className="mt-4">
              <SocialLinks />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <FooterLinks title="Quick Links" links={quickLinks} />
          </div>
          
          {/* Resources */}
          <div>
            <FooterLinks title="Resources" links={resourceLinks} />
          </div>
          
          {/* Newsletter */}
          <div>
            <Newsletter />
          </div>
        </div>
        
        {/* Contact information */}
        <div className="border-t border-gray-800 mt-10 pt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start space-x-3">
            <MapPin className="text-indigo-400 mt-1 flex-shrink-0" size={18} />
            <span className="text-gray-300 text-sm">ISRO Headquarters, Antariksh Bhavan, New BEL Road, Bangalore - 560094</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="text-indigo-400 flex-shrink-0" size={18} />
            <span className="text-gray-300 text-sm">+91 80 2217 2465</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="text-indigo-400 flex-shrink-0" size={18} />
            <span className="text-gray-300 text-sm">contact@isro.gov.in</span>
          </div>
        </div>
      </div>
      
      {/* Bottom footer section */}
      <div className="bg-black bg-opacity-50 py-4 relative z-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Indian Space Research Organisation. All Rights Reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">Terms of Use</a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
      
      {/* Decorative orbital line */}
      <div className="absolute w-full h-40 top-0 left-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute w-[200%] h-[500px] border-2 border-white rounded-[100%] left-[-50%] top-[-450px]"></div>
      </div>
    </footer>
  );
};

export default Footer;