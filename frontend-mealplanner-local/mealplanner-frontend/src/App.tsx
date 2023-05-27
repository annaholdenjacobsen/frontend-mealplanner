import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import MealPage from "./pages/MealPage";
import { exmeals } from "./examplemeals";
import { UserPage } from "./pages/UserPage";
import HomePage from "./pages/Homepage";
import IngredientsListPage from "./pages/IngredientsListPage";
import GroceryListPage from "./pages/GroceryListPage";
import MealPlanPage from "./pages/MealPlanPage";
function App() {
  return (
    <>
      <Router>
        <MealPlanPage />
      </Router>
    </>
  );
}
/*
function App() {
  return (
    <>
      <Router>
          <Route path="/" Component={HomePage} />
          <Route
            path="/meal/:mealId"
            element={<MealPage  />}
          />
      </Router>
    </>
  );
}*/

export default App;
