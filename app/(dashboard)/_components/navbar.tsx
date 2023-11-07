import { UserButton } from "@clerk/nextjs";
import MobilSidebar from "./mobil-sidebar";

export const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <div className="ml-auto flex items-center space-x-4">
        <UserButton afterSignOutUrl="/" />
      </div>
      <MobilSidebar />
    </div>
  );
};
