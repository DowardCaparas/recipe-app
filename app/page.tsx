import RecipeCard from "./ui/recipe-card";
import { fetchAllRecipes } from "./lib/data";
import Hero from "./ui/hero-section";

const Home = async () => {
  const recipes = await fetchAllRecipes();
  return (
    <main>
      <Hero />
      <div className="md:mx-10 mx-5 my-20">
        <div className="my-16 max-md:text-center">
          <span className="font-semibold text-gray-500 md:text-4xl text-2xl">
            Available Recipes
          </span>
        </div>
        <RecipeCard recipes={recipes} />
      </div>
    </main>
  );
};

export default Home;
