import Text from "@/app/components/ui/Text";
import MenuListItem from "./Item";
import styles from "./MenuList.module.scss";
import { MenuList } from "../types";

function MenuList({ title, content }: MenuList) {
  return (
    <li className={styles.container}>
      <Text type="subtitle-lg">{title}</Text>
      <ul className={styles.list}>
        {content.map((link, index) => (
          <MenuListItem key={index} link={link} />
        ))}
      </ul>
    </li>
  );
}

export default MenuList;
