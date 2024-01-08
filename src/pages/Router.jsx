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

  //add item
  const setCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id,
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].amount += productAmountValue;
      setCartItems(updatedCartItems);
    } else {
      const updatedItem = { ...item, amount: productAmountValue };
      setCartItems([...cartItems, updatedItem]);
    }
  };

  const deleteItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
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
              setCartItems={setCartItems}
              onProduct={setProduct}
              onDelete={deleteItem}
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
