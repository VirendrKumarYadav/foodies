"use client";


import React from 'react';
import Link from 'next/link';

const FoodGalary = () => {

    const recipes = [
        {
            "_id": "66add35ef76624498bb66886",
            "title": "Quinoa with grilled peppers and mint",
            "Image": "https://images.unsplash.com/photo-1562923690-e274ba919781?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "description": "A nutritious and flavorful dish made with cooked rice, fresh spinach, and a blend of spices. Spinach is sautéed with onions, garlic.",
            "price": 12.99,
            "category": "Fried Rice",
            "like": [],
            "dislike": [],
            "likesCount": 0,
            "__v": 0
        },
        {
            "_id": "66add443f76624498bb66888",
            "title": "Sesame Veggie Stir-Fry with Coconut Aminos",
            "Image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "description": "After two weeks of living on bourbon and donuts (okay, fine. Two and a half.) I decided it was time to kick myself into healthy gear.",
            "price": 12.99,
            "category": "Healthy Quick Meals",
            "like": [],
            "dislike": [],
            "likesCount": 0,
            "__v": 0
        },
        {
            "_id": "66add4abf76624498bb6688a",
            "title": "Stuffed eggplants with yogurt and salad",
            "Image": "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "description": "Pulled out favorite fresh veggies, drizzled with sesame oil, rice vinegar and a kiss coconut aminos. And reminded myself that fast food doesn’t have to come from a drive thru.",
            "price": 12.99,
            "category": "Healthy Quick Meals",
            "like": [],
            "dislike": [],
            "likesCount": 0,
            "__v": 0
        },
        {
            "_id": "66add556f76624498bb6688c",
            "title": "Cake cum pastry!",
            "Image": "https://images.unsplash.com/photo-1514056052883-d017fddd0426?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "description": "My studio was filled with so many sweets. So we piled them in a pan and sent them off to a holiday party for at-risk youth. SO glad they didn’t have to get dumped!",
            "price": 12.99,
            "category": "Cake",
            "like": [],
            "dislike": [],
            "likesCount": 0,
            "__v": 0
        },
        {
            "_id": "66add591f76624498bb6688e",
            "title": "Cake cum pastry!",
            "Image": "https://images.unsplash.com/photo-1538344765476-1bdce4a00228?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "description": "So we piled them in a pan and sent them off to a holiday party for at-risk youth. SO glad they didn’t have to get dumped, my studio was filled with so many sweets.",
            "price": 12.99,
            "category": "Cake",
            "like": [],
            "dislike": [],
            "likesCount": 0,
            "__v": 0
        },
        {
            "_id": "66add639f76624498bb66890",
            "title": "Waiter holding a fried chicken and french fries on the wooden plate!",
            "Image": "https://images.unsplash.com/photo-1625940951329-4e8d09f87692?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "description": "So we piled them in a pan and sent them off to a holiday party for at-risk youth. SO glad they didn’t have to get dumped, my studio was filled with so many sweets.",
            "price": 20.99,
            "category": "Fastfood",
            "like": [],
            "dislike": [],
            "likesCount": 0,
            "__v": 0
        },
        {
            "_id": "66add69bf76624498bb66892",
            "title": "Waiter holding a fried chicken and french fries on the wooden plate!",
            "Image": "https://images.unsplash.com/photo-1625940951329-4e8d09f87692?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "description": "Plate featuring a golden, crispy fried chicken piece alongside a generous serving of perfectly cooked French fries.",
            "price": 20.99,
            "category": "Fastfood",
            "like": [],
            "dislike": [],
            "likesCount": 0,
            "__v": 0
        },
        {
            "_id": "66add716f76624498bb66894",
            "title": "Homemade Italian Pizza with Pepperoni!",
            "Image": "https://images.unsplash.com/photo-1648679708301-3e2865043526?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "description": "A homemade Italian pizza topped with slices of spicy pepperoni, melted mozzarella cheese, and a rich tomato sauce. Crispy on the outside and chewy on the inside.",
            "price": 22.99,
            "category": "Fastfood",
            "like": [],
            "dislike": [],
            "likesCount": 0,
            "__v": 0
        }
    ];

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {recipes.map((recip, idx) => (
                        <Link className="lg:w-1/3 sm:w-1/2 p-4" key={idx} href={`/recipe/${recip._id}`}>
                            {/* <div className="lg:w-1/3 sm:w-1/2 p-4"> */}
                                <div className="flex relative">
                                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={recip.Image} />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{recip.category}</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{recip.title}</h1>
                                        <p className="leading-relaxed">{recip.description}</p>
                                    </div>
                                </div>
                            {/* </div> */}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FoodGalary;
