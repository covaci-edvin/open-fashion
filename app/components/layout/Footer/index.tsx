"use client";

import useScreenSize from "@/app/hooks/useScreenSize";
import Separator from "../../ui/Separator";
import Socials from "../../ui/Socials";
import styles from "./Footer.module.scss";
import Links from "./Links";
import Contacts from "../../ui/Contacts";
import Text from "../../ui/Text";
import { useEffect, useState } from "react";

function Footer() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const screenSize = useScreenSize();

  useEffect(() => {
    setIsMobile(screenSize.width !== 0 && screenSize.width < 481);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenSize]);

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
