import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { Icon: FaFacebook, href: "#" },
    { Icon: FaTwitter, href: "#" },
    { Icon: FaInstagram, href: "#" },
    { Icon: FaLinkedin, href: "#" }
  ];

  return (
      <footer className="bg-gradient-to-r from-indigo-950 to-purple-950 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-indigo-950 font-bold text-xl">L</span>
                </div>
                <h2 className="text-2xl font-bold">Linklytics</h2>
              </div>
              <p className="text-gray-300">
                Simplifying URL shortening for efficient sharing
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center space-x-6">
                {socialLinks.map(({ Icon, href }, index) => (
                    <a
                        key={index}
                        href={href}
                        className="hover:text-indigo-300 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      <Icon size={24} />
                    </a>
                ))}
              </div>
            </div>

            <div className="text-right">
              <p className="text-gray-300">
                &copy; {new Date().getFullYear()} Linklytics.
                <br />
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;