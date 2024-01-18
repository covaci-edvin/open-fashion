import Link from "next/link";
import Text from "../Text";
import styles from "./Contacts.module.scss";

function Contacts() {
  return (
    <ul className={styles.list}>
      <li>
        <Link href={"mailto:support@openui.design"}>
          <Text type="body-lg">support@openui.design</Text>
        </Link>
      </li>
      <li>
        <Link href={"tel:+60 825 876"}>
          <Text type="body-lg">+60 825 876</Text>
        </Link>
      </li>
      <li>
        <Text type="body-lg">08:00 - 22:00 - Everyday</Text>
      </li>
    </ul>
  );
}

export default Contacts;
