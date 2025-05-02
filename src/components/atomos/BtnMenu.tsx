import { FiMenu } from "react-icons/fi";
import { menuResponsiveStore } from "../../stores/menuResponsiveStore";

export function BtnMenu() {
  const { togleMenu } = menuResponsiveStore()
  return (
    <button onClick={togleMenu} className="md:hidden iconMenu cursor-pointer">
      <FiMenu color="#11d178" size={30} />
    </button>
  )
}
