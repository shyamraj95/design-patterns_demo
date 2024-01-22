
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
        icon: "",
        badge: "",
        pathName: "Case Schedule",
        path: "/dash/test",
        title: "Case Schedule"
      },
      {
        icon: "",
        badge: "",
        pathName: "Delivered Goods",
        path: "",
        title: "Delivered Goods"
      },
      {
        icon: "",
        badge: "",
        pathName: "FAQ",
        path: "",
        title: "FAQ"
      },
      {
        icon: "",
        badge: "",
        pathName: "Loaner Forms",
        path: "",
        title: "Loaner Forms"
      },
      {
        icon: "",
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
        icon: "",
        badge: "",
        pathName: "Set Placement",
        path: "",
        title: "Set Placement"
      },
      {
        icon: "",
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
        icon: "",
        badge: "",
        pathName: "Expiring Items",
        path: "",
        title: "Expiring Items"
      },
      {
        icon: "",
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
