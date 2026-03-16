import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/thunderemperor467',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/adityachauhan2307/',
      icon: Linkedin,
    },
    {
      name: 'Email',
      url: 'mailto:thunderemperor467@gmail.com',
      icon: Mail,
    },
  ];

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            <p className="flex items-center gap-1">
              © {currentYear} Aditya Chauhan. Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using React & MongoDB
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-blue-600 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          {/* Quick Links */}
          <div className="flex items-center space-x-4 text-sm">
            <Link
              to="/resume"
              className="text-muted-foreground hover:text-blue-600 transition-colors duration-200"
            >
              Resume
            </Link>
            <Link
              to="/contact"
              className="text-muted-foreground hover:text-blue-600 transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;