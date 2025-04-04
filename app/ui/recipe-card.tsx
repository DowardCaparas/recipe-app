import Image from "next/image";
import Link from "next/link";
import React from "react";

interface RecipesTypes {
  id: number;
  name: string;
  image: string;
  rating: number;
}

const truncateName = (name: string, limit: number = 13) => {
  return name.length > limit ? name.slice(0, limit) + "..." : name;
};

const RecipeCard = ({ recipes }: { recipes: RecipesTypes[] }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-6 gap-2 justify-center">
      {recipes.map((recipe) => (
        <Link
          key={recipe.id}
          href={`/recipe/${recipe.id}`}
          className="bg-linear-to-r from-black to-red-800 flex flex-col rounded-xl
          border-3 border-black hover:rounded-none overflow-x-hidden animation_transition
          hover:shadow-md shadow-gray-500"
        >
          <Image
            src={recipe.image}
            alt={recipe.name}
            width={350}
            height={350}
            className="rounded-t-xl w-full hover:rounded-none hover:scale-105 animation_transition"
          />
          <div className="flex items-center justify-between gap-2 p-3">
            <span className="text-white md:text-md text-sm font-semibold">
              {truncateName(recipe.name)}
            </span>
            <div className="flex gap-1 items-center">
              <Image src="/star.svg" alt="star" width={20} height={20} />
              <span className="text-white">{recipe.rating}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecipeCard;
