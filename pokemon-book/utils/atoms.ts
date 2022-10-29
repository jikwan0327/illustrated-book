import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});

export const isModalAtom = atom({
  key: "isModal",
  default: false,
});

export const search = atom({
  key: "search",
  default: "",
});
