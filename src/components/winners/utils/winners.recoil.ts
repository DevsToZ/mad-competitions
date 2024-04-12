import { atom } from "recoil";

export const fileToUploadAtom = atom({
  key: "fileToUpload",
  default: null as File | null,
});
