import Link from "next/link";
import styles from "./MenuLink.module.scss";
import Text from "@/app/components/ui/Text";
import { Link as LinkT } from "../../types";

function MenuLink({ text, href }: LinkT) {
  return (
    <Link className={styles.link} href={href}>
      <Text type="body-lg">{text}</Text>
    </Link>
  );
}

export default MenuLink;
