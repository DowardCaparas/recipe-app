export const fetchRecipeById = async (id: number) => {
  try {
    const res = await fetch(`https://dummyjson.com/recipes/${id}`);

    if (!res.ok) throw new Error(`Failed to fetch recipe, ${res.status}`);

    const data = res.json();
    return data;
  } catch (error) {
    console.error("Error fetching recipe:", error);
    throw error;
  }
};

export const fetchAllRecipes = async () => {
    try {
        const res =  await fetch('https://dummyjson.com/recipes?limit=0');

        if(!res.ok) throw new Error(`Failed to fetch recipes, ${res.status}`);

        const data = await res.json();

        return data.recipes || [];

    } catch (error) {
        console.error("Error fetching all recipes:", error);
        throw error;
    }
}
