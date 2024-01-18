import Link from "next/link";
import styles from "./Links.module.scss";
import Text from "../../ui/Text";

function Links() {
  return (
    <ul className={styles.list}>
      <li>
        <Link className={styles.link} href={"#"}>
          <Text type="body-lg">About</Text>
        </Link>
      </li>
      <li>
        <Link className={styles.link} href={"#"}>
          <Text type="body-lg">Contact</Text>
        </Link>
      </li>
      <li>
        <Link className={styles.link} href={"#"}>
          <Text type="body-lg">Blog</Text>
        </Link>
      </li>
    </ul>
  );
}

export default Links;
