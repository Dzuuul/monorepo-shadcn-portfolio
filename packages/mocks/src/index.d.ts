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

export const mockNavbarMenu: NavbarMenuItem[];
export const mockNavbarAction: NavbarActionItem[];

declare const _default: {
  navbarMenu: NavbarMenuItem[];
  navbarAction: NavbarActionItem[];
};

export default _default;