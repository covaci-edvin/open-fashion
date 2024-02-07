import { bodoniModa } from "@/app/ui/fonts";
import styles from "./Banner.module.scss";
import Link from "next/link";
import Text from "@/app/components/ui/Text";

type Props = {
  bgColor: string;
};

function Banner({ bgColor }: Props) {
  return (
    <div style={{ backgroundColor: bgColor }} className={`${styles.container}`}>
      <div className={`${styles["banner-wrapper"]} ${bodoniModa.className}`}>
        <span
          className={`${styles["banner-element"]} ${styles["luxury-element"]}`}
        >
          Luxury
        </span>
        <span
          className={`${styles["banner-element"]} ${styles["fashion-element"]}`}
        >
          Fashion
        </span>
        <div>
          <span
            className={`${styles["banner-element"]} ${styles["and-element"]}`}
          >
            &
          </span>
          <span className={styles["banner-element"]}>Accessories</span>
        </div>
      </div>
      <Link href={"/"} className={`${styles["btn-cta"]} link`}>
        <Text type="title" className={styles["link-text"]}>
          Explore Collection
        </Text>
      </Link>
    </div>
  );
}

export default Banner;
