import React from 'react';
import { Link } from 'react-router-dom';
import FooterMenu from './FooterMenu';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand and Slogan */}
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">Africa AIM</span>
            </Link>
            <p className="text-gray-300 text-base">
              Empowering Africa's AI Innovation Ecosystem. Connect, collaborate, and create the future of AI technology across the continent.
            </p>
            <SocialLinks />
          </div>

          {/* Menu */}
          <div className="mt-12 xl:mt-0 xl:col-span-2">
            <FooterMenu />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-gray-400">
              &copy; {new Date().getFullYear()} Africa AIM. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;