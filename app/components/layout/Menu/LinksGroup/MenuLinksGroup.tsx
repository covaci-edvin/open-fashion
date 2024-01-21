import { Links } from "../types";
import MenuLink from "../Link/MenuLink";
import styles from "./MenuLinksGroup.module.scss";

function MenuLinksGroup({ links }: Links) {
  return (
    <ul className={styles.list}>
      {links.map((link, id) => (
        <li className={styles.item} key={`${link.text}-${id}`}>
          <MenuLink text={link.text} href={link.href} />
        </li>
      ))}
    </ul>
  );
}

export default MenuLinksGroup;
