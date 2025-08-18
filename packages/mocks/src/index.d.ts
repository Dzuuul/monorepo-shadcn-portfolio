export interface NavbarMenuItem {
  id: number;
  label: string;
  href: string;
  icon: string;
  order: number;
}

export interface NavbarActionItem extends NavbarMenuItem {
  icon2?: string;
  localization?: {
    id: number;
    name: string;
    code: string;
    flag: string;
  }[];
  type: "dropdown" | "switch" | "button";
}

export interface ProjectTabItem {
  id: number;
  label: string;
  value: string;
  src: string;
  order: number;
}

export const mockNavbarMenu: NavbarMenuItem[];
export const mockNavbarAction: NavbarActionItem[];
export const mockProjectMenu: ProjectTabItem[];

declare const _default: {
  navbarMenu: NavbarMenuItem[];
  navbarAction: NavbarActionItem[];
  projectMenu: ProjectTabItem[];
};

export default _default;