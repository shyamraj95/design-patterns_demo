
import { Role } from "../models/role";
import { MenuItem } from "../models/sidebar.metadata";

export const MenuItems: MenuItem[] = [
  {
    roles: [Role.All],
    menus: [{
      icon: 'home',
      badge: "",
      pathName: "Home",
      path: "",
      title: '',
    },
/*     {
      icon: 'home',
      badge: "",
      roles: [Role.Admin],
      pathName: "Home",
      path: "",
      title: ''
    },
    {
      icon: 'home',
      badge: "",
      roles: [Role.Admin],
      pathName: "Home",
      path: "",
      title: ''
    } */
  ]
  },
  {
    icon: 'work',
    groupTitle: "Case Management",
    roles: [Role.All],
    menus: [
      {
        icon: "work",
        badge: "",
        pathName: "Case Schedule",
        path: "/dash/test",
        title: "Case Schedule"
      },
      {
        icon: "logout",
        badge: "",
        pathName: "Delivered Goods",
        path: "",
        title: "Delivered Goods"
      },
      {
        icon: "inventory",
        badge: "",
        pathName: "FAQ",
        path: "",
        title: "FAQ"
      },
      {
        icon: "remove_red_eye",
        badge: "",
        pathName: "Loaner Forms",
        path: "",
        title: "Loaner Forms"
      },
      {
        icon: "info",
        badge: "",
        pathName: "Hip",
        path: "",
        title: "Hip"
      }
      
    ],
  },
  {
    icon: "inventory",
    groupTitle: "Inventory",
    roles: [Role.All, Role.Admin, Role.User],
    menus: [
      {
        icon: "arrow_back",
        badge: "",
        pathName: "Set Placement",
        path: "",
        title: "Set Placement"
      },
      {
        icon: "inventory",
        badge: "",
        pathName: "Unassigned Inventory",
        path: "",
        title: "Unassigned Inventory"
      },

    ],
  },
  {
    icon: "remove_red_eye",
    groupTitle: "Inquiry",
    roles: [Role.All, Role.Admin, Role.User],
    menus: [
      {
        icon: "remove_red_eye",
        badge: "",
        pathName: "Expiring Items",
        path: "",
        title: "Expiring Items"
      },
      {
        icon: "inventory",
        badge: "",
        pathName: "Items Number Inquiry",
        path: "",
        title: "Items Number Inquiry"
      },
    ],
  },
  {
    icon: "info",
    groupTitle: "About",
    roles: [Role.All, Role.Admin, Role.User],
    menus: [],
  }
];
