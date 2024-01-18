"use client";

import useScreenSize from "@/app/hooks/useScreenSize";
import Separator from "../../ui/Separator";
import Socials from "../../ui/Socials";
import styles from "./Footer.module.scss";
import Links from "./Links";
import Contacts from "../../ui/Contacts";
import Text from "../../ui/Text";

function Footer() {
  const screenSize = useScreenSize();
  const isMobile = screenSize.width < 482;

  return (
    <>
      <section className={styles.container}>
        <div className={styles.contacts}>
          <Socials />
          <Separator />
          <Contacts />
        </div>
        {isMobile && <Separator />}
        <Links />
      </section>
      <section className={styles.copyright}>
        <Text type="body-sm">Copyright&copy; OpenUI All Rights Reserved.</Text>
      </section>
    </>
  );
}

export default Footer;
