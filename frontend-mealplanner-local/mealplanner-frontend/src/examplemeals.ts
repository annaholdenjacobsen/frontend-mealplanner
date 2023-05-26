import { GroceryItem, Ingredients, IngredientsStock, Meal } from "./utils";

export const exIngredients: IngredientsStock[] = [
  {
    id: "1",
    name: "Chicken",
    quantity: 1,
    unit: "kg",
    expiryDate: new Date("2023-05-28"),
  },
  {
    id: "2",
    name: "Rice",
    quantity: 1,
    unit: "kg",
    expiryDate: new Date("2023-05-28"),
  },
  {
    id: "3",
    name: "Broccoli",
    quantity: 1,
    unit: "unit",
    expiryDate: new Date("2023-05-28"),
  },
  {
    id: "4",
    name: "Carrot",
    quantity: 3,
    unit: "kg",
    expiryDate: new Date("2023-04-30"),
  },
  {
    id: "5",
    name: "Pasta",
    quantity: 2,
    unit: "kg",
    expiryDate: new Date("2024-05-28"),
  },
  {
    id: "6",
    name: "Beef",
    quantity: 1,
    unit: "kg",
    expiryDate: new Date("2023-05-29"),
  },
];

export const exGroceries: GroceryItem[] = [
  {
    id: "1",
    name: "Chicken",
    quantity: 1,
    unit: "kg",
    price: 10,
    isPurchased: false,
  },
  {
    id: "2",
    name: "Oats",
    quantity: 1,
    unit: "kg",
    price: 2,
    isPurchased: false,
  },
  {
    id: "3",
    name: "Salmon",
    quantity: 400,
    unit: "g",
    price: 10,
    isPurchased: false,
  },
  {
    id: "4",
    name: "Tomato",
    quantity: 500,
    unit: "g",
    price: 2,
    isPurchased: false,
  },
  {
    id: "5",
    name: "Onion",
    quantity: 500,
    unit: "g",
    price: 2,
    isPurchased: false,
  },
  {
    id: "6",
    name: "Garlic",
    quantity: 1,
    unit: "unit",
    price: 1,
    isPurchased: false,
  },
  {
    id: "7",
    name: "Pasta",
    quantity: 500,
    unit: "g",
    price: 2,
    isPurchased: true,
  },
];

export const exmeals: Meal[] = [
  {
    id: "1",
    name: "Pizza",
    price: 10,
    image: "/src/assets/Mealsimg/pizza.jpg",
    ingredients: [
      {
        id: "1",
        name: "tomato",
        quantity: 1,
        unit: "unit",
      },
      {
        id: "2",
        name: "cheese",
        quantity: 1,
        unit: "unit",
      },
      {
        id: "3",
        name: "dough",
        quantity: 1,
        unit: "unit",
      },
    ],
  },
  {
    id: "2",
    name: "Burger",
    price: 11,
    image: "/src/assets/Mealsimg/burger.jpg",
    ingredients: [
      {
        id: "1",
        name: "tomato",
        quantity: 1,
        unit: "unit",
      },
      {
        id: "2",
        name: "cheese",
        quantity: 1,
        unit: "unit",
      },
        {
        id: "3",
        name: "Burger Bread",
        quantity: 1,
        unit: "unit",
        },
        {
        id: "4",
        name: "Beef",
        quantity: 400,
        unit: "g",
        }
    ],
  },
  {
    id: "3",
    name: "Pasta Pesto",
    price: 7,
    image: "/src/assets/Mealsimg/pastapesto.jpg",
    ingredients: [{
        id: "1",
        name: "Pasta",
        quantity: 500,
        unit: "g",
    },
    {
        id: "2",
        name: "Pesto",
        quantity: 1,
        unit: "unit",
    }],
  },
  {
    id: "4",
    name: "Pokebowl",
    price: 13,
    image: "/src/assets/Mealsimg/pokebowl.jpg",
    ingredients: [
      {
        id: "1",
        name: "Salmon",
        quantity: 400,
        unit: "g",
      },
      {
        id: "2",
        name: "Rice",
        quantity: 1,
        unit: "kg",
      },
      {
        id: "3",
        name: "Avocado",
        quantity: 1,
        unit: "unit",
        },
        {
        id: "4",
        name: "Cucumber",
        quantity: 1,
        unit: "unit",
        },

    ],
  },
  {
    id: "5",
    name: "Butter Chicken",
    price: 9,
    image: "/src/assets/Mealsimg/butterchicken.jpg",
    ingredients: [
        {
        id: "1",
        name: "Chicken",
        quantity: 1,
        unit: "kg",
        },
        {
        id: "2",
        name: "Rice",
        quantity: 1,
        unit: "kg",
        },
        {
        id: "3",
        name: "Butter Chicken Sauce",
        quantity: 1,
        unit: "bottle",
        }
    ],
  },
  {
    id: "6",
    name: "Carrot Fries",
    price: 5,
    image: "/src/assets/Mealsimg/carrotfries.jpg",
    ingredients: [
        {
        id: "1",
        name: "Carrot",
        quantity: 1,
        unit: "kg",
        },
        {
        id: "2",
        name: "Olive Oil",
        quantity: 1,
        unit: "tablespoon",

        }
    ],
  },
  {
    id: "7",
    name: "Chickpea Curry",
    price: 8,
    image: "/src/assets/Mealsimg/chickpeacurry.jpg",
    ingredients: [{
        id: "1",
        name: "Chickpeas",
        quantity: 1,
        unit: "kg",
    
    }],
  },
  {
    id: "8",
    name: "Filled Paprika",
    price: 6,
    image: "/src/assets/Mealsimg/filledpaprika.jpg",
    ingredients: [{
        id: "1",
        name: "Paprika",
        quantity: 1,
        unit: "unit",
    },
    {
        id: "2",
        name: "Rice",
        quantity: 1,
        unit: "kg",
  },
  {
        id: "3",
        name: "Cheese",
        quantity: 1,
        unit: "unit",
  }],
  },
  {
    id: "9",
    name: "Pasta Salad",
    price: 8,
    image: "/src/assets/Mealsimg/pastasalad.jpg",
    ingredients: [{
        id: "1",
        name: "Pasta",
        quantity: 500,
        unit: "g",
    },
    {
        id: "2",
        name: "Tomato",
        quantity: 1,
        unit: "unit",
    },
    {
        id: "3",
        name: "Cucumber",
        quantity: 1,
        unit: "unit",
    },
    ],
  },
  {
    id: "10",
    name: "Salmon",
    price: 12,
    image: "/src/assets/Mealsimg/salmon.jpg",
    ingredients: [{
        id: "1",
        name: "Salmon",
        quantity: 400,
        unit: "g",
    },
    ],
  },
  {
    id: "11",
    name: "Shawarma",
    price: 10,
    image: "/src/assets/Mealsimg/shawarma.jpg",
    ingredients: [
      {
        id: "1",
        name: "Chicken",
        quantity: 1,
        unit: "kg",
      },
      {
        id: "2",
        name: "Pita Bread",
        quantity: 1,
        unit: "unit",
      }, {
        id: "3",
        name: "Garlic Sauce",
        quantity: 1,
        unit: "unit",
      }, {
        id: "4",
        name: "Lettuce",
        quantity: 1,
        unit: "unit",
      }
    ],
  },
  {
    id: "12",
    name: "Taco",
    price: 9,
    image: "/src/assets/Mealsimg/taco.jpg",
    ingredients: [
      {
        id: "1",
        name: "Taco",
        quantity: 1,
        unit: "unit",
      }
    ],
  },
];
