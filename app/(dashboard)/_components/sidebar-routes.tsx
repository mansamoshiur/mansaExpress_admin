"use client";

import SidebarItem from "./SidebarItem";
import {
  ActivitySquare,
  Brush,
  Layout,
  LayoutList,
  Package,
  Settings,
  ShoppingBag,
} from "lucide-react";

const sidebarRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: LayoutList,
    label: "Categories",
    href: "/categories",
  },
  {
    icon: ActivitySquare,
    label: "Sizes",
    href: "/sizes",
  },
  {
    icon: Brush,
    label: "Colors",
    href: "/colors",
  },
  {
    icon: Package,
    label: "Products",
    href: "/products",
  },
  {
    icon: ShoppingBag,
    label: "Orders",
    href: "/orders",
  },
  // {
  //   icon: Settings,
  //   label: "Settings",
  //   href: "/settings",
  // },
];

const SidebarRoutes = () => {
  return (
    <div className="flex flex-col w-full">
      {sidebarRoutes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;
