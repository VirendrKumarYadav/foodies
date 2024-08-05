"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodGalary = () => {
    const [recipes, setRecipes] = useState([]); // State to store recipes
    const [loading, setLoading] = useState(true); // State to handle loading
    const [error, setError] = useState(null); // State to handle errors

    // Function to fetch data from API
    const fetchRecipes = async () => {
        try {
            const response = await axios.get('https://foodies-back-htpv.onrender.com/api/v1/recipe/recipes');
            // Log the response to check the data structure
            console.log(response.data);
            setRecipes(response.data); // Set the recipes state with the fetched data
        } catch (error) {
            console.error('Error fetching recipes:', error);
            setError('Failed to fetch recipes'); // Set error state if an error occurs
        } finally {
            setLoading(false); // Set loading to false when data fetching is complete
        }
    };

    // useEffect to run fetchRecipes once when the component mounts
    useEffect(() => {
        fetchRecipes();
    }, []);

    if (loading) {
        return <p>Loading...</p>; // Show loading text while data is being fetched
    }

    if (error) {
        return <p>{error}</p>; // Show error message if an error occurs
    }

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Food Gallery</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Explore our delicious recipes!
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {recipes && Array.isArray(recipes) && recipes.length === 0 ? (
                        <p className="text-center w-full">No recipes found</p>
                    ) : (
                        recipes && Array.isArray(recipes) && recipes.map((recip) => (
                            <div key={recip._id} className="lg:w-1/3 sm:w-1/2 p-4">
                                <div className="flex relative">
                                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={recip.Image} />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{recip.category}</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{recip.title}</h1>
                                        <p className="leading-relaxed">{recip.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default FoodGalary;
