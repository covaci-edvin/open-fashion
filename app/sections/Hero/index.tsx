"use client";

import styles from "./Hero.module.scss";
import BackgroundSlider from "./components/BackgroundSlider";
import Banner from "./components/Banner";
import { useState } from "react";

function HeroSection() {
  const [bannerBgColor, setBannerBgColor] = useState("black");

  return (
    <section className={styles["section-container"]}>
      <Banner bgColor={bannerBgColor} />
      <div className={styles["slider-wrapper"]}>
        <BackgroundSlider setBannerBgColor={setBannerBgColor} />
      </div>
    </section>
  );
}

export default HeroSection;
