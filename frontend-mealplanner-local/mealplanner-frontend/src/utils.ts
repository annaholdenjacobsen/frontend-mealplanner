let url = "";

/**
 * The config.json file will be generated the first time the API is deployed for use in local development.
 * When the UI is deployed, a custom resource will supply the config.json file.
 * If your stack isn't named `MealPlannerStack`, you'll need to update the constant below.
 * @returns the url as a string
 */
const getUrl = async () => {
  if (url) {
    return url;
  }
  const response = await fetch("./config.json");
  url = `${(await response.json()).MealPlannerStack.HttpApiUrl}/grocieries`;
  return url;
};

export const getGroceries = async () => {
  const result = await fetch(await getUrl());

  return await result.json();
};

export type GroceryItem = {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  price: number;
  isPurchased: boolean;
};

export type Meal = {
  id: string;
  name: string;
  image: string;
  ingredients: Ingredients[];
  price: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  mealplan: MealPlan;
  grocerylist: GroceryItem[];
  ingredientsList: String[];
};

export type IngredientsStock = {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  expiryDate: Date;
};
export type Ingredients = {
  id: string;
  name: string;
  quantity: number;
  unit: string;
};

export type MealPlan = {};
