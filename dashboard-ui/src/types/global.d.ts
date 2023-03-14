import { ReactElement } from "react";

export type SidebarMenuItem = {
  title: string;
  to: string;
  icon: ReactElement;
  selected: string;
  setSelected: (value: string) => void;
};

export type Header = {
  title: string;
  subtitle: string;
};
