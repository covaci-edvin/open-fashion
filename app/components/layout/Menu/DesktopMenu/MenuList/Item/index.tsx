import Link from "next/link";
import styles from "./MenuListItem.module.scss";
import { Link as LinkT } from "../../../MobileMenu/types";

type Props = {
  link: LinkT;
};

function MenuListItem({ link }: Props) {
  return (
    <li className={styles.item}>
      <Link className={`${styles.link} body-md`} href={link.href}>
        {link.text}
      </Link>
    </li>
  );
}

export default MenuListItem;
