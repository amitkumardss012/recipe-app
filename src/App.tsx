import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import { Home } from "./pages/Home";
import { Alphabet } from "./pages/Alphabet";
import { Country } from "./pages/Country";
import { CatogeryMeals } from "./pages/CatogeryMeals";
import { Recipe } from "./pages/Recipe";
import { Search } from "./pages/Search";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alphabet/:alphabet" element={<Alphabet />} />
        <Route path="/country/:country" element={<Country />} />
        <Route path="/category/:category" element={<CatogeryMeals />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
