import { Outlet } from "react-router-dom";
import { Naybar } from "./Naybar";
import { MenuResponsive } from "../moleculas/MenuResponsive";

export function Layout() {
  return (
    <>
      <Naybar />
      <MenuResponsive />
      <div className="flex">
        <Outlet />
      </div>
    </>
  )
}
