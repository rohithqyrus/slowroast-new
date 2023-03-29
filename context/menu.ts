import { createContext, Dispatch, SetStateAction } from "react";
interface MenuContext {
    menu: boolean;
    setMenu: Dispatch<SetStateAction<boolean>>;
  }
const MenuContext = createContext<MenuContext>({
    menu: true,
    setMenu: () => {}
})

export default MenuContext