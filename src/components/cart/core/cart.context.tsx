import { createContext } from "react";
import { useRecoilState } from "recoil";
import { cartItemsAtom } from "../utils/cart.recoil";
import { MAX_TICKET_NUMBER } from "../../../lib/consts";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: (_id: string) => {},
  addAmountToCart: (
    _id: string,
    _title: string,
    _amount: number,
    _price: number,
    _img: string,
    _questionAnswer: string
  ) => {},
  removeOneFromCart: (_id: string) => {},
  removeFromCart: () => {},
  deleteFromCart: (_id: string) => {},
  getTotalCost: () => {},
  getTotalTickets: () => {},
  modifiyQuantity: (_id: string, _amount: number) => {},
});

export function CartProvider({ children }: any) {
  const [cartProducts, setCartProducts] = useRecoilState(cartItemsAtom);
  function getProductQuantity(id: string) {
    let quantity = cartProducts.find((product) => product.id === id)?.amount;

    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function modifiyQuantity(id: string, amount: number) {
    const quantity = getProductQuantity(id);

    if (Number(quantity) + Number(amount) > MAX_TICKET_NUMBER) {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, amount: Number(MAX_TICKET_NUMBER) }
            : product
        )
      );
    }

    setCartProducts(
      cartProducts.map((product) =>
        product.id === id ? { ...product, amount: Number(amount) } : product
      )
    );
  }

  function addOneToCart(
    id: string,
    title: string,
    amount: number,
    price: number,
    img: string,
    questionAnswer: string
  ) {
    const quantity = getProductQuantity(id);

    if (Number(quantity) + Number(amount) > MAX_TICKET_NUMBER) {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, amount: Number(MAX_TICKET_NUMBER) }
            : product
        )
      );
    } else if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          title: title,
          price: price,
          img: img,
          questionAnswer: questionAnswer,
          amount: 1,
        },
      ]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, amount: Number(product.amount) + 1 }
            : product
        )
      );
    }
  }

  function addAmountToCart(
    id: string,
    title: string,
    amount: number,
    price: number,
    img: string,
    questionAnswer: string
  ) {
    const quantity = getProductQuantity(id);

    if (Number(quantity) + Number(amount) > MAX_TICKET_NUMBER) {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, amount: Number(MAX_TICKET_NUMBER) }
            : product
        )
      );
    } else if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          title: title,
          price: price,
          img: img,
          questionAnswer: questionAnswer,
          amount: amount,
        },
      ]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, amount: Number(product.amount) + amount }
            : product
        )
      );
    }
  }

  function removeOneFromCart(id: string) {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, amount: product.amount - 1 }
            : product
        )
      );
    }
  }

  function removeFromCart(id: string, amount: number) {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, amount: product.amount - amount }
            : product
        )
      );
    }
  }

  function deleteFromCart(id: string) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id !== id;
      })
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = cartProducts.find(
        (product) => product.id === cartItem.id
      );
      if (productData) {
        totalCost += productData.price * cartItem.amount;
      } else {
        throw new Error("Product not found in the database.");
      }
    });
    return totalCost;
  }

  function getTotalTickets() {
    let totalTickets = 0;
    cartProducts.map((cartItem) => {
      const productData = cartProducts.find(
        (product) => product.id === cartItem.id
      );
      if (productData) {
        totalTickets += Number(cartItem.amount);
      } else {
        throw new Error("Product not found in the database.");
      }
    });
    return totalTickets;
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addAmountToCart,
    addOneToCart,
    removeOneFromCart,
    removeFromCart,
    deleteFromCart,
    getTotalCost,
    getTotalTickets,
    modifiyQuantity,
  };
  return (
    // @ts-ignore
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
