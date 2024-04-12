import { atom } from "recoil";
import { localStorageEffect } from "../../../lib/recoil/persistAtom";

export const currentActivePageAtom = atom({
  key: "currentActivePage",
  default: 0,
});

export const isAdminAtom = atom({
  key: "isAdmin",
  default: false,
});

export const tokenAtom = atom({
  key: "token",
  default: { token: null, expiresIn: 0 },
  effects: [localStorageEffect("idToken")],
});

export const shouldRefetchAtom = atom({
  key: "shouldRefetch",
  default: false,
});

export const shouldRefetchWinnerAtom = atom({
  key: "shouldRefetchWinner",
  default: false,
});

export const isCookiesAcceptedAtom = atom({
  key: "isCookiesAccepted",
  default: false,
  effects: [localStorageEffect("cookiesAccepted")],
});
