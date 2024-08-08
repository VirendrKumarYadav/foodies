import React from 'react'

const Profile = () => {
  return (
    <section className="text-gray-700 body-font bg-gray-50">
    <div className="container mx-auto px-5 py-24">
        <div className="text-center mb-20">
            <h1 className="sm:text-4xl text-3xl font-bold title-font text-gray-900 mb-4">
                Get in Touch
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600">
                Feel free to reach out to me for any inquiries or connections. I'm always open to discussing new opportunities and collaborations.
            </p>
        </div>
        <div className="flex flex-wrap justify-center mb-20">
            <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0 mx-auto text-center">
                <img
                    alt="profile"
                    className="w-32 h-32 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://avatars.githubusercontent.com/u/87600216?s=400&u=a4f4abb2436b047e9606a803a07a06b682fe38c4&v=4" // Replace with your image URL
                />
                <h2 className="text-gray-900 font-bold title-font text-xl mb-2">
                    Virendra Yadav
                </h2>
                <p className="text-gray-500 text-base mb-4">
                    Founder & CEO of Foodlink F&B Holdings India Pvt. Ltd.
                </p>
                <p className="text-gray-500 text-base mb-4">
                    Mumbai, India
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="https://www.instagram.com//im_vireoff" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M4.98 3.5a1.5 1.5 0 11-2.996-.002A1.5 1.5 0 014.98 3.5zM3 5.5a1.5 1.5 0 003 0 1.5 1.5 0 00-3 0zM22 21.5v-7.5c0-4.125-2.835-7.5-6.5-7.5s-6.5 3.375-6.5 7.5v7.5h-3v-10h3v1.415a6.683 6.683 0 011.5-1.415C10.165 8.863 13.5 6.5 18 6.5s6.5 3.375 6.5 7.5v7.5h-3z"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/virendra-yadav-446894227/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                        </svg>
                    </a>
                    <a href="https://github.com/VirendrKumarYadav" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.167 6.839 9.485.5.092.682-.217.682-.482v-1.818c-2.817.613-3.406-1.362-3.406-1.362-.459-1.161-1.122-1.47-1.122-1.47-.92-.63.07-.616.07-.616 1.016.071 1.547 1.048 1.547 1.048.99 1.691 2.59 1.206 3.224.924.098-.717.39-1.206.71-1.48-2.533-.288-5.185-1.267-5.185-5.628 0-1.242.445-2.255 1.177-3.054-.118-.287-.511-1.444.111-3.004 0 0 .95-.304 3.11 1.153.902-.251 1.865-.377 2.827-.38.963.003 1.927.129 2.825.382 2.159-1.457 3.106-1.153 3.106-1.153.62 1.561.23 2.717.112 3.004.736.798 1.179 1.812 1.179 3.054 0 4.368-2.651 5.339-5.18 5.623.397.344.752.952.752 1.912v2.832c0 .27.186.573.693.478C21.133 20.168 24 16.418 24 12c0-5.523-4.477-10-10-10z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Profile