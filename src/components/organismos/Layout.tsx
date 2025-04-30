import { Outlet } from "react-router-dom";
import { Naybar } from "./Naybar";

export function Layout() {
  return (
    <>
      <Naybar />
      <div className="flex">
        <Outlet />
      </div>
    </>
  )
}
