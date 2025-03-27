import React from 'react';
import { Link } from 'react-router-dom';

interface MenuSection {
  title: string;
  links: { label: string; href: string }[];
}

const menuSections: MenuSection[] = [
  {
    title: 'Enterprise Services',
    links: [
      { label: 'Services', href: '/services' },
      { label: 'API Service', href: '/api-service' },
    ],
  },
  {
    title: 'Professional Services',
    links: [
      { label: 'Become Member', href: '/membership' },
      { label: 'Success Stories', href: '/success-stories' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Support', href: '/support' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Career', href: '/careers' },
    ],
  },
];

const FooterMenu = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {menuSections.map((section) => (
        <div key={section.title}>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            {section.title}
          </h3>
          <ul className="mt-4 space-y-3">
            {section.links.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterMenu;
