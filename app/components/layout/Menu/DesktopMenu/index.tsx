import { forwardRef } from "react";
import styles from "./DesktopMenu.module.scss";
import MenuList from "./MenuList";
import { MenuList as MenuListT } from "./types";

type Props = {
  menuLists: MenuListT[];
  showMenu: boolean;
  [key: string]: any;
};

type Ref = HTMLDivElement;

const DesktopMenu = forwardRef<Ref, Props>(function DesktopMenu(
  { showMenu, menuLists },
  menuRef
) {
  const containerClasses = `${styles.container} ${
    showMenu ? styles["show-menu"] : ""
  }`;

  return (
    <div ref={menuRef} className={containerClasses}>
      <menu className={styles.menu}>
        {menuLists.map((menuList, index) => (
          <MenuList
            key={index}
            title={menuList.title}
            content={menuList.content}
          />
        ))}
      </menu>
    </div>
  );
});

export default DesktopMenu;
