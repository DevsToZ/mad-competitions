import { atom } from "recoil";

export const filesToUploadAtom = atom({
  key: "filesToUpload",
  default: [] as File[],
});
