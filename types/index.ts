import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export type IFooterLinks = {
  title: string;
  links: Array<Links>;
};

type Links = {
  title: string;
  url: string;
};
