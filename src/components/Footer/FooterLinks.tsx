import React from 'react';

type LinkGroupProps = {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
};

const FooterLinks: React.FC<LinkGroupProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col space-y-2">
      <h3 className="text-white font-semibold mb-3 text-lg">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href={link.url} 
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;