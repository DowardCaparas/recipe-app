import { fetchRecipeById } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecipePage = async (props: {
  params: Promise<{
    id: number;
  }>;
}) => {
  const params = await props.params;
  const id = params.id || 1;

  const recipe = await fetchRecipeById(id);

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 bg-gray-100 w-full py-14">
      <div className="lg:p-10 p-5">
        <Image
          src={recipe.image}
          alt={recipe.name}
          width={500}
          height={500}  
          className="w-full rounded-xl -mt-10 border-4 border-red-500"
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="lg:p-10 p-5 md:overflow-y-scroll md:h-screen bg-white">
          {/* name and cuisine */}
          <div className="inline-grid mb-5">
            <span className="text-gray-400 font-semibold uppercase">
              {recipe.cuisine}
            </span>
            <span className="font-bold md:text-4xl text-2xl">
              {recipe.name}
            </span>
          </div>
          {/* rating */}
          <div className="flex gap-2 items-center mb-10">
            <Image src="/star.svg" alt="star" width={25} height={25} />
            <>
              <span className="font-semibold mr-2">{recipe.rating}</span>
              <span className="font-semibold">
                ({recipe.reviewCount} reviews)
              </span>
            </>
          </div>
          {/* another iformations */}
          {/* calories per serving */}
          <div className="inline-grid mb-5">
            <span className="text-xl flex items-center gap-2 mb-2">
              Calories per serving:
              <span className="font-semibold text-2xl">
                {recipe.caloriesPerServing}
              </span>
            </span>
            <hr />
            {/*  */}
            <div className="mt-5 mb-3 inline-grid leading-9">
              {recipe.cookTimeMinutes > 0 && (
                <span>
                  Cooking time:{" "}
                  <span className="font-semibold">
                    {recipe.cookTimeMinutes} minutes
                  </span>
                </span>
              )}
              <span>
                Serving:{" "}
                <span className="font-semibold">{recipe.servings}</span>
              </span>
              <span>
                Difficulty:{" "}
                <span className="font-semibold">{recipe.difficulty}</span>
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <span>Meal type:</span>
                {recipe.mealType.map((type: string, index: number) => (
                  <span key={type} className="font-semibold">
                    {type}
                    {index === recipe.mealType.length - 1 ? "" : ","}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span>Tags:</span>
                {recipe.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="bg-gray-200 py-1 px-4 text-gray-700 rounded-xl text-sm text-center font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ingredients */}
          <>
            <hr className="mb-2" />
            <span className="font-semibold text-xl">Ingredients:</span>
            <div className="mt-2">
              {recipe.ingredients.map((ingredient: string) => (
                <ul key={ingredient} className="leading-7">
                  <li className="list-disc ml-3">{ingredient}</li>
                </ul>
              ))}
            </div>
          </>
          {/* instructions */}
          <div className="mt-10">
            <hr className="mb-2" />
            <span className="font-semibold text-xl">Instructions:</span>
            <div className="mt-2">
              {recipe.instructions.map((instruction: string, index: number) => (
                <ol
                  key={instruction}
                  className="flex items-start gap-2 leading-7"
                >
                  <span className="font-semibold">{index + 1}.</span>
                  <li>{instruction}</li>
                </ol>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10">
        <Link href={"/"} className="bg-red-700 p-4 px-6 rounded-lg text-center">
          <span className="text-white text-xl font-semibold">Back to Home</span>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
