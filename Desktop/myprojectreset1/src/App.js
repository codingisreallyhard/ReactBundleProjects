import "./App.css";
import { useContext, useState } from "react";
import CartButton from "./UI/CartButton";
import Navigation from "./UI/Navigation";
import { Route, Routes } from "react-router-dom";
import MealsPage from "./Pages/MealsPage";
import FavoritePage from "./Pages/FavoritePage";
import MainPage from "./Pages/MainPage";
import "./App.css";
import Cart from "./Cart/Cart";

function App() {
  const [cartShow, setCartShow] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      console.log("adding working?");
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, items: exist.items + 1 } : x
        )
      );
    } else {
      setCartItems(...cartItems, { ...product, items: 1 });
    }
  };

  const showCartHandler = () => {
    setCartShow(true);
  };

  const hideCartHandler = () => {
    setCartShow(false);
  };

  return (
    <div>
      <nav>
        <Navigation />
        <CartButton onClick={showCartHandler} />
      </nav>
      {cartShow && <Cart onClose={hideCartHandler} />}
      <main>
        <Routes>
          <Route path="/Favorites" element={<FavoritePage />}></Route>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/meals" element={<MealsPage />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
