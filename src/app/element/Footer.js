import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-full md:w-64 flex-shrink-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M12 4.5c-1.38 0-2.5 1.12-2.5 2.5S10.62 9.5 12 9.5s2.5-1.12 2.5-2.5S13.38 4.5 12 4.5zm0 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm8.84 2.66a.5.5 0 0 1-.46.31H3.62a.5.5 0 0 1-.46-.31L1 10.75c-.2-.33-.16-.75.1-1.04A9.992 9.992 0 0 1 12 2a9.992 9.992 0 0 1 10.9 7.71c.26.29.3.71.1 1.04l-1.86 3.41zM12 4a8.95 8.95 0 0 0-8.21 5.23L3.62 9H20.38l.83 1.23A8.95 8.95 0 0 0 12 4zm0 3a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm5 6h-2v-2h2v2zm-4 0h-2v-2h2v2zm-4 0H7v-2h2v2z" />
            </svg>
            <span className="ml-3 text-xl">Food&Link</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">Connecting you with the best food experiences.</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {['Restaurant', 'Recipes', 'Cuisines', 'Nutrition'].map((category, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 w-full px-4 mb-6 md:mb-0">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">{category}</h2>
              <nav className="list-none mb-10">
                {['Top Picks', 'New Arrivals', 'Popular Dishes', 'Special Offers'].map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a className="text-gray-600 hover:text-gray-800">{link}</a>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 Food&Link —
            <a href="https://twitter.com/foodlink" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@foodlink</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            {[
              {
                d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                viewBox: "0 0 24 24"
              },
              {
                d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                viewBox: "0 0 24 24"
              },
              {
                d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01",
                viewBox: "0 0 24 24"
              },
              {
                d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
                viewBox: "0 0 24 24"
              }
            ].map((icon, iconIndex) => (
              <a key={iconIndex} className="ml-3 text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox={icon.viewBox}>
                  <path d={icon.d}></path>
                </svg>
              </a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
