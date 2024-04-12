import { format } from "date-fns";

export enum BannerColors {
  TODAY = "green.400",
  TOMORROW = "yellow.400",
  DEFAULT = "gray.400",
}

export const CARD_WIDTH = "475px";

export enum Tags {
  CAR = "Car",
  TECH = "Tech",
  CASH = "Cash",
  OTHER = "Other",
}

export enum BE_Tags {
  CAR = "CAR",
  TECH = "TECH",
  CASH = "CASH",
  OTHER = "OTHER",
}

export const tagToLabel = (tag: string) => {
  switch (tag) {
    case BE_Tags.TECH:
      return Tags.TECH;
    case BE_Tags.CAR:
      return Tags.CAR;
    case BE_Tags.CASH:
      return Tags.CASH;
    default:
      return Tags.OTHER;
  }
};

export const TagsArray = [
  BE_Tags.CAR,
  BE_Tags.TECH,
  BE_Tags.CASH,
  BE_Tags.OTHER,
];

export const formatDate = (date: string) => {
  return format(new Date(date), "PPP");
};
