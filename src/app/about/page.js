"use client"
import React from 'react';
import Profile from '../about/Profile'

const AboutFoodlink = () => {
    return (
        <section className="text-gray-700 body-font bg-gray-50">
            <div className="container mx-auto px-5 py-24">
                <div className="text-center mb-20">
                    <h1 className="sm:text-4xl text-3xl font-bold title-font text-gray-900 mb-4">
                        Revolutionizing the Gastronomical Experience
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600">
                        Foodlink F&B Holdings India Pvt. Ltd., established in 2003 by the visionary leader Sanjay Vazirani, has consistently set new standards in the Indian Food & Beverage Service Industry. What began as a small-scale venture in Mumbai has evolved into a premier luxury catering brand, renowned for crafting exclusive culinary experiences from across the globe.
                    </p>
                </div>
                <div className="text-center mb-20">
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600">
                        Over the years, Foodlink has significantly expanded its footprint, becoming India's largest and most prestigious Food & Beverage Service Company. Headquartered in Mumbai, Foodlink operates in four distinct verticals, each contributing to its esteemed reputation:
                    </p>
                </div>
                <div className="text-center mb-12">
                    <ul className="list-disc list-inside xl:w-3/4 lg:w-3/4 mx-auto text-gray-600">
                        <li className="text-lg leading-relaxed mb-4">✨ Luxury Catering</li>
                        <li className="text-lg leading-relaxed mb-4">🏛️ Luxury Banquets</li>
                        <li className="text-lg leading-relaxed mb-4">🏢 Institutional Catering</li>
                        <li className="text-lg leading-relaxed mb-4">🍽️ Restaurants & Cloud Kitchens</li>
                    </ul>
                </div>
                <div className="text-center">
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600">
                        Under the dynamic leadership of Virendra Yadav, Foodlink has not only expanded its offerings but also established a distinct niche in the sector. With a relentless pursuit of excellence and a sharp focus on quality, Foodlink has earned the trust of an elite clientele from across the country and beyond. Virendra Yadav's visionary approach continues to drive the company towards unprecedented growth and success.
                    </p>
                </div>
            </div>
            <Profile/>
        </section>
    );
};

export default AboutFoodlink;
