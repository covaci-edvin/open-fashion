import Link from "next/link";
import styles from "./Navbar.module.scss";
import { WOMEN_MENU, MEN_MENU, KIDS_MENU } from "@/dummy-data";
import Text from "../../ui/Text";
import { ReactNode, useEffect, useRef, useState } from "react";
import DesktopMenu from "../Menu/DesktopMenu";
import { MenuList } from "../Menu/DesktopMenu/types";
import useIsHovered from "@/app/hooks/useIsHovered";

type ListItemProps = {
  menuCategory: MenuList[];
  href: string;
  children: ReactNode;
};

function ListItem({ menuCategory, href, children }: ListItemProps) {
  const [linkClassNames, setLinkClassNames] = useState<string>("");
  const triggerRef = useRef<HTMLLIElement>(null);
  const isHovered = useIsHovered(triggerRef);

  useEffect(() => {
    setLinkClassNames(`${isHovered ? styles.active : ""}`);
  }, [isHovered]);

  return (
    <li ref={triggerRef} role="menuitem" className={styles["list-item"]}>
      <Link className={`navbar-link ${linkClassNames}`} href={href}>
        <Text type="subtitle-sm">{children}</Text>
      </Link>
      <DesktopMenu showMenu={isHovered} menuLists={menuCategory} />
    </li>
  );
}

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list} aria-label="Categories" role="menu">
        <ListItem href="/women" menuCategory={WOMEN_MENU}>
          Women
        </ListItem>
        <ListItem href="/men" menuCategory={MEN_MENU}>
          Men
        </ListItem>
        <ListItem href="/kids" menuCategory={KIDS_MENU}>
          Kids
        </ListItem>
      </ul>
    </nav>
  );
}

export default Navbar;
