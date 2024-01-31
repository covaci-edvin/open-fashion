import Separator from "../../ui/Separator";
import Socials from "../../ui/Socials";
import styles from "./Footer.module.scss";
import Links from "./Links";
import Contacts from "../../ui/Contacts";
import Text from "../../ui/Text";

function Footer() {
  return (
    <footer>
      <section className={styles.container}>
        <div className={styles.contacts}>
          <Socials />
          <Separator />
          <Contacts />
        </div>
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
