import { atom } from "recoil";
import { CartItemProps } from "./types";
import { localStorageEffect } from "../../../lib/recoil/persistAtom";

export const cartItemsAtom = atom({
  key: "cartItems",
  default: [] as unknown as CartItemProps[],
  effects: [localStorageEffect("cartItems")],
});
