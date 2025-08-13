export const mockNavbarMenu = [
  {
    id: 1,
    label: "Home",
    href: "#",
    icon: "",
    order: 1,
  },
  {
    id: 2,
    label: "About Me",
    href: "#about-me",
    icon: "",
    order: 2,
  },
  {
    id: 3,
    label: "Project",
    href: "#project",
    icon: "",
    order: 3,
  },
  {
    id: 4,
    label: "Skills",
    href: "#skills",
    icon: "",
    order: 4,
  },
  {
    id: 5,
    label: "Services",
    href: "#services",
    icon: "",
    order: 5,
  },
  {
    id: 6,
    label: "Contact Me",
    href: "#contact-me",
    icon: "",
    order: 6,
  },
];

export const mockNavbarAction = [
  {
    id: 1,
    label: "",
    href: "#",
    icon: "languages",
    localization: [
      {
        id: 1,
        name: "English",
        code: "en",
        flag: "https://flagcdn.com/us.svg",
      },
      {
        id: 2,
        name: "Indonesian",
        code: "id",
        flag: "https://flagcdn.com/id.svg",
      },
    ],
    order: 1,
    type: "dropdown",
  },
  {
    id: 2,
    label: "",
    href: "#",
    icon: "moon",
    icon2: "sun",
    order: 2,
    type: "switch",
  },
  {
    id: 3,
    label: "Let's Talk",
    href: "#contact-me",
    icon: "",
    order: 3,
    type: "button",
  },
];

export default { navbarMenu: mockNavbarMenu, navbarAction: mockNavbarAction };
