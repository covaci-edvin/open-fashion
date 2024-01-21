"use client";

import Link from "next/link";
import Icon from "../../ui/Icon";
import Logo from "../../ui/Logo";
import styles from "./Header.module.scss";
import Menu from "../Menu";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenuHandler = () => {
    setIsMenuOpen(true);
    document.documentElement.classList.add("prevent-body-scroll");
  };

  const closeMenuHandler = () => {
    setIsMenuOpen(false);
    document.documentElement.classList.remove("prevent-body-scroll");
  };

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={openMenuHandler}>
        <Icon name="menu-burger" />
      </button>
      <div className={styles["logo-container"]}>
        <Link href={"/home"}>
          <Logo />
        </Link>
      </div>
      <div className={styles.actions}>
        <button className={styles.btn}>
          <Icon name="search" />
        </button>
        <Link href="#" className={styles.btn}>
          <Icon name="shopping-bag" />
        </Link>
      </div>
      <Menu isOpen={isMenuOpen} onClose={closeMenuHandler} />
    </div>
  );
}

export default Header;
