"use client";

import Link from "next/link";
import Icon from "../../ui/Icon";
import Logo from "../../ui/Logo";
import styles from "./Header.module.scss";
import { useEffect, useRef, useState } from "react";
import useScreenSize from "@/app/hooks/useScreenSize";
import Navbar from "../Navbar";
import MobileMenu from "../Menu/MobileMenu";

function Header() {
  const screenSize = useScreenSize();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const openMenuBtn = useRef<HTMLButtonElement>(null);

  const openMenuHandler = () => {
    setIsMenuOpen(true);
    document.documentElement.classList.add("prevent-body-scroll");
  };

  const closeMenuHandler = () => {
    setIsMenuOpen(false);
    document.documentElement.classList.remove("prevent-body-scroll");
    openMenuBtn.current?.focus();
  };

  useEffect(() => {
    setIsDesktop(screenSize.width > 1023);
  }, [screenSize]);

  return (
    <div className={styles.container}>
      <div className={styles["logo-container"]}>
        <Link href={"/home"}>
          <Logo />
        </Link>
      </div>
      {!isDesktop && (
        <button
          ref={openMenuBtn}
          className={`${styles.btn} ${styles["btn-open-menu"]}`}
          onClick={openMenuHandler}
        >
          <Icon name="menu-burger" />
        </button>
      )}
      <div className={styles["navbar-wrapper"]}>
        <Navbar />
      </div>
      <div className={styles.actions}>
        <button className={styles.btn}>
          <Icon name="search" />
        </button>
        <Link href="#" className={styles.btn}>
          <Icon name="shopping-bag" />
        </Link>
      </div>
      {!isDesktop && (
        <MobileMenu isOpen={isMenuOpen} onClose={closeMenuHandler} />
      )}
    </div>
  );
}

export default Header;
