import { MouseEventHandler } from "react";
import SearchManufacturer from "../components/SearchManufacturer";

export interface CustomButtonProps {
  title: string;
  containerStyles: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface ISearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export type IFooterLinks = {
  title: string;
  links: Array<Links>;
};

type Links = {
  title: string;
  url: string;
};
