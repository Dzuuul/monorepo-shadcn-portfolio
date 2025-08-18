const mockNavbarMenu = [
  {
    id: 1,
    label: "Navbar.home",
    href: "#home",
    icon: "",
    order: 1,
  },
  {
    id: 2,
    label: "Navbar.about",
    href: "#about-me",
    icon: "",
    order: 2,
  },
  {
    id: 3,
    label: "Navbar.projects",
    href: "#project",
    icon: "",
    order: 3,
  },
  {
    id: 4,
    label: "Navbar.skills",
    href: "#skills",
    icon: "",
    order: 4,
  },
  {
    id: 5,
    label: "Navbar.services",
    href: "#services",
    icon: "",
    order: 5,
  },
  {
    id: 6,
    label: "Navbar.contact",
    href: "#contact-me",
    icon: "",
    order: 6,
  },
];

const mockNavbarAction = [
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
    label: "Navbar.letsTalk",
    href: "#contact-me",
    icon: "",
    order: 3,
    type: "button",
  },
];

const mockProjectMenu = [
  {
    id: 1,
    label: "Landing Page",
    value: "landing-page",
    src: "https://raw.githubusercontent.com/fikriismail/monorepo-shadcn-portfolio/main/apps/web/public/images/landing-page.png",
    order: 1,
  },
  {
    id: 2,
    label: "Company Profile",
    value: "company-profile",
    order: 2,
  },
  {
    id: 3,
    label: "Dashboard CMS",
    value: "dashboard-cms",
    order: 3,
  },
  {
    id: 4,
    label: "LMS",
    value: "lms",
    order: 4,
  },
  {
    id: 5,
    label: "HRIS",
    value: "hris",
    order: 5,
  },
  {
    id: 6,
    label: "eCommerce",
    value: "ecommerce",
    order: 6,
  },
  {
    id: 7,
    label: "Blog",
    value: "blog",
    order: 7,
  },
  {
    id: 8,
    label: "Custom Website",
    value: "custom-website",
    order: 8,
  },
];

export default { navbarMenu: mockNavbarMenu, navbarAction: mockNavbarAction, projectMenu: mockProjectMenu };
