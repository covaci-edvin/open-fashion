import Separator from "../../ui/Separator";
import Socials from "../../ui/Socials";
import styles from "./Footer.module.scss";
import Links from "./Links";
import Contacts from "../../ui/Contacts";
import Text from "../../ui/Text";

function Footer() {
  return (
    <footer>
      <section className={`section section-top-margin ${styles.container}`}>
        <Socials className={styles.socials} />
        <Separator className={styles.separator} />
        <Contacts />
        <Separator className={styles.separator} />
        <Links />
      </section>
      <section className={styles.copyright}>
        <Text type="body-sm">Copyright&copy; OpenUI All Rights Reserved.</Text>
      </section>
    </footer>
  );
}

export default Footer;
