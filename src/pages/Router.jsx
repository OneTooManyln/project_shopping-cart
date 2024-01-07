import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import UseAPI from "../components/UseAPI";
import App from "../App";
import Shop from "./Shop";
import Cart from "./Cart";
import Home from "./Home";
import Product from "./Product";

export default function Router() {
  const { APIData, error, loading } = UseAPI();
  const [productToDisplay, setProductToDisplay] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [productAmountValue, setProductAmountValue] = useState(1);

  const setProduct = (index) => {
    setProductToDisplay(index);
  };

  const setCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id,
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].amount += 1;
      setCartItems(updatedCartItems);
    } else {
      const updatedItem = { ...item, amount: 1 };
      setCartItems([...cartItems, updatedItem]);
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: (
            <Home
              APIData={APIData}
              error={error}
              loading={loading}
              onProduct={setProduct}
            />
          ),
        },
        {
          path: "shop",
          element: (
            <Shop
              APIData={APIData}
              error={error}
              loading={loading}
              onProduct={setProduct}
            />
          ),
        },
        {
          path: "cart",
          element: (
            <Cart
              cartItems={cartItems}
              productAmountValue={productAmountValue}
            />
          ),
        },
        {
          path: "product",
          element: (
            <Product
              productToDisplay={productToDisplay}
              onAddCart={setCart}
              productAmountValue={productAmountValue}
              setProductAmountValue={setProductAmountValue}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
