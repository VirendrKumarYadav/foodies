import { useEffect, useState } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RecipeCard = ({ recip }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <Link data-aos="flip-left" className="lg:w-1/3 sm:w-1/2 p-4 " href={`/recipe/${recip._id}`}>
            <div className="flex relative ">
                <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-60 object-cover object-center rounded-lg"
                    src={recip.Image}
                    style={{ height: '250px' }} // Ensures uniform image height
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{recip.category}</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{recip.title}</h1>
                    <p className="leading-relaxed">
                        {isExpanded ? recip.description : `${recip.description.substring(0, 100)}...`}
                    </p>
                    {recip.description.length > 100 && (
                        <button
                            onClick={toggleExpand}
                            className="text-indigo-500 hover:text-indigo-600"
                        >
                            {isExpanded ? 'Show Less' : 'More Info'}
                        </button>
                    )}
                </div>
            </div>
        </Link>
    );
};



export default RecipeCard;
