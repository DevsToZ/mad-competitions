import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import CartProvider from "./components/cart/core/cart.context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider toastOptions={{ defaultOptions: { position: "top" } }}>
      <RecoilRoot>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </RecoilRoot>
    </ChakraProvider>
  </React.StrictMode>
);
