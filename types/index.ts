import { MouseEventHandler } from "react";
import SearchManufacturer from "../components/SearchManufacturer";

export interface CustomButtonProps {
  title: string;
  containerStyles: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: string;
}

export interface ISearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface IFilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface ICarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export type IFooterLinks = {
  title: string;
  links: Array<Links>;
};

type Links = {
  title: string;
  url: string;
};

export interface ICustomFilterProps {
  title: string;
  options: Array<FilteringOptions>;
}

interface FilteringOptions {
  title: string;
  value: string;
}

export interface IShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
