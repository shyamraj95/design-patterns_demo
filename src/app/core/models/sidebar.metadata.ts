
/* interface BaseMenuItem {
  icon: string;
  badge: string;
  roles: Array<string>;
}

interface WithoutSubmenu {
  pathName: string;
  path: string;
  groupTitle?: never;
  submenu?: never;
  title: string;
}

interface WithSubMenu {
  pathName?: never;
  path?: never;
  groupTitle: string;
  submenu: Submenu[]
}

interface Submenu extends BaseMenuItem {
  pathName: string;
  path: string;
  title: string;
}

export type MenuItem = BaseMenuItem & (WithoutSubmenu | WithSubMenu); */



interface BaseMenuItem {
  icon: string;
  badge: string;
  pathName: string;
  path: string;
  title: string;
  // roles: Array<string>;
}

interface WithoutSubmenu {
  groupTitle?: never;
  icon?: never;
  roles: Array<string>;
  menus: BaseMenuItem[];
}

interface WithSubMenu {
  icon: string;
  groupTitle: string;
  roles: Array<string>;
  menus: BaseMenuItem[];
}


export type MenuItem = WithoutSubmenu | WithSubMenu;