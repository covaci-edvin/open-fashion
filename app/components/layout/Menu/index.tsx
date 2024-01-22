"use client";
import Icon from "../../ui/Icon";
import styles from "./Menu.module.scss";
import MenuTabs from "./Tabs";
import Link from "next/link";
import Text from "../../ui/Text";
import Separator from "../../ui/Separator";
import Socials from "../../ui/Socials";
import { useEffect, useRef } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function Menu({ isOpen, onClose }: Props) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const menuClassNames = `${styles.container} ${
    isOpen ? styles["open-menu"] : ""
  }`;

  const backdropClassNames = `${styles.backdrop} ${
    isOpen ? styles["open-backdrop"] : ""
  }`;

  useEffect(() => {
    isOpen && closeBtnRef.current?.focus();
  }, [isOpen]);

  return (
    <>
      <div className={backdropClassNames} onClick={onClose}></div>
      <div className={menuClassNames}>
        <button
          aria-label="Close"
          ref={closeBtnRef}
          onClick={onClose}
          className={styles["btn-close"]}
        >
          <Icon name="close" />
        </button>
        <div className={styles.content}>
          <MenuTabs />
        </div>
        <div className={styles.contacts}>
          <hr className={styles.border} aria-hidden="true" />
          <Link className={styles.link} href="tel:(786) 713-8616">
            <Icon name="call" />
            <Text type="body-lg">(786) 713-8616</Text>
          </Link>
          <Link className={styles.link} href="#">
            <Icon name="location" />
            <Text type="body-lg">Store locator</Text>
          </Link>
          <Separator className={styles.separator} />
          <Socials className={styles.socials} />
        </div>
      </div>
    </>
  );
}

export default Menu;
