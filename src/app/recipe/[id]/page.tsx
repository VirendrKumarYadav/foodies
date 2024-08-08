"use client";

import { useParams } from 'next/navigation';
import React from 'react';

interface Recipe {
  _id: string;
  title: string;
  Image: string;
  description: string;
  price: number;
  category: string;
  like: any[];
  dislike: any[];
  likesCount: number;
  __v: number;
}

const recipes: Recipe[] = [
  // Your recipes data here
  {
    _id: "66add35ef76624498bb66886",
    title: "Quinoa with grilled peppers and mint",
    Image: "https://images.unsplash.com/photo-1562923690-e274ba919781?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A nutritious and flavorful dish made with cooked rice, fresh spinach, and a blend of spices. Spinach is sautéed with onions, garlic.",
    price: 12.99,
    category: "Fried Rice",
    like: [],
    dislike: [],
    likesCount: 0,
    __v: 0
  },
  {
    _id: "66add443f76624498bb66888",
    title: "Sesame Veggie Stir-Fry with Coconut Aminos",
    Image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "After two weeks of living on bourbon and donuts (okay, fine. Two and a half.) I decided it was time to kick myself into healthy gear.",
    price: 12.99,
    category: "Healthy Quick Meals",
    like: [],
    dislike: [],
    likesCount: 0,
    __v: 0
  },
  {
    _id: "66add4abf76624498bb6688a",
    title: "Stuffed eggplants with yogurt and salad",
    Image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Pulled out favorite fresh veggies, drizzled with sesame oil, rice vinegar and a kiss coconut aminos. And reminded myself that fast food doesn’t have to come from a drive thru.",
    price: 12.99,
    category: "Healthy Quick Meals",
    like: [],
    dislike: [],
    likesCount: 0,
    __v: 0
  },
  {
    _id: "66add556f76624498bb6688c",
    title: "Cake cum pastry!",
    Image: "https://images.unsplash.com/photo-1514056052883-d017fddd0426?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "My studio was filled with so many sweets. So we piled them in a pan and sent them off to a holiday party for at-risk youth. SO glad they didn’t have to get dumped!",
    price: 12.99,
    category: "Cake",
    like: [],
    dislike: [],
    likesCount: 0,
    __v: 0
  },
  {
    _id: "66add591f76624498bb6688e",
    title: "Cake cum pastry!",
    Image: "https://images.unsplash.com/photo-1538344765476-1bdce4a00228?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "So we piled them in a pan and sent them off to a holiday party for at-risk youth. SO glad they didn’t have to get dumped, my studio was filled with so many sweets.",
    price: 12.99,
    category: "Cake",
    like: [],
    dislike: [],
    likesCount: 0,
    __v: 0
  },
  {
    _id: "66add639f76624498bb66890",
    title: "Waiter holding a fried chicken and french fries on the wooden plate!",
    Image: "https://images.unsplash.com/photo-1625940951329-4e8d09f87692?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "So we piled them in a pan and sent them off to a holiday party for at-risk youth. SO glad they didn’t have to get dumped, my studio was filled with so many sweets.",
    price: 20.99,
    category: "Fastfood",
    like: [],
    dislike: [],
    likesCount: 0,
    __v: 0
  },
  {
    _id: "66add69bf76624498bb66892",
    title: "Waiter holding a fried chicken and french fries on the wooden plate!",
    Image: "https://images.unsplash.com/photo-1625940951329-4e8d09f87692?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8fHx8fGVufDB8fHx8fA%3D%3D",
    description: "Plate featuring a golden, crispy fried chicken piece alongside a generous serving of perfectly cooked French fries.",
    price: 20.99,
    category: "Fastfood",
    like: [],
    dislike: [],
    likesCount: 0,
    __v: 0
  },
  {
    _id: "66add716f76624498bb66894",
    title: "Homemade Italian Pizza with Pepperoni!",
    Image: "https://images.unsplash.com/photo-1648679708301-3e2865043526?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8fHx8fGVufDB8fHx8fA%3D%3D",
    description: "A homemade Italian pizza topped with slices of spicy pepperoni, melted mozzarella cheese, and a rich tomato sauce. Crispy on the outside and chewy on the inside.",
    price: 22.99,
    category: "Fastfood",
    like: [],
    dislike: [],
    likesCount: 0,
    __v: 0
  },
  {
    _id: "66add443f76624498bb66888",
    title: "Sesame Veggie Stir-Fry with Coconut Aminos",
    Image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8fHx8fGVufDB8fHx8fA%3D%3D",
    description: "After two weeks of living on bourbon and donuts (okay, fine. Two and a half.) I decided it was time to kick myself into healthy gear.",
    price: 12.99,
    category: "Healthy Quick Meals",
    like: [],
    dislike: [],
    likesCount: 0,
    __v: 0
  },
];

const RecipeDetail: React.FC = () => {
  const params = useParams();
  const { id } = params as { id: string };

  const recipe = recipes.find((recipe) => recipe._id === id);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Recipe Detail</h1>
    <div className="flex flex-col md:flex-row items-center">
      <img
        src={recipe.Image}
        alt={recipe.title}
        className="w-full md:w-96 h-auto object-cover mb-4 md:mb-0 md:mr-4"
        style={{ maxHeight: '400px' }} 
      />
      <div className="md:w-2/3">
        <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
        <p className="text-base text-gray-700 mb-4">{recipe.description}</p>
        <p className="text-lg font-medium mb-2">Price: ${recipe.price.toFixed(2)}</p>
        <p className="text-md font-medium mb-2">Category: {recipe.category}</p>
        <p className="text-md font-medium mb-2">Likes Count: {recipe.likesCount}</p>
      </div>
    </div>
  </div>
  );
};

export default RecipeDetail;
