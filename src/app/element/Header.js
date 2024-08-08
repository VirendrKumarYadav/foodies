"use client";

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M12 4.5c-1.38 0-2.5 1.12-2.5 2.5S10.62 9.5 12 9.5s2.5-1.12 2.5-2.5S13.38 4.5 12 4.5zm0 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm8.84 2.66a.5.5 0 0 1-.46.31H3.62a.5.5 0 0 1-.46-.31L1 10.75c-.2-.33-.16-.75.1-1.04A9.992 9.992 0 0 1 12 2a9.992 9.992 0 0 1 10.9 7.71c.26.29.3.71.1 1.04l-1.86 3.41zM12 4a8.95 8.95 0 0 0-8.21 5.23L3.62 9H20.38l.83 1.23A8.95 8.95 0 0 0 12 4zm0 3a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm5 6h-2v-2h2v2zm-4 0h-2v-2h2v2zm-4 0H7v-2h2v2z" />
          </svg>
          <span className="ml-3 text-xl">Food&Link</span>
        </a>
        <nav className="md:ml-auto md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center space-y-2 md:space-y-0">
          <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
          <Link href="/about" className="mr-5 hover:text-gray-900">About</Link>
          <Link href="/login" className="mr-5 hover:text-gray-900">Login</Link>
          <Link href="/contact" className="mr-5 hover:text-gray-900">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
