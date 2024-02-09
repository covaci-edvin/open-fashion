import Image from "next/image";
import styles from "./Brands.module.scss";
import { DUMMY_BRANDS } from "@/dummy-data";
import Separator from "@/app/components/ui/Separator";

function BrandBox({ svgUrl }: { svgUrl: string }) {
  return (
    <div className={styles["brand-wrapper"]}>
      <Image
        src={svgUrl}
        alt="brand"
        width={20}
        height={16}
        className={styles.img}
      />
    </div>
  );
}

function Brands() {
  return (
    <section className={`${styles.section} section section-top-margin `}>
      <Separator />
      <div className={`${styles.brands}`}>
        {DUMMY_BRANDS.map((el, index) => (
          <BrandBox svgUrl={el} key={index} />
        ))}
      </div>
      <Separator />
    </section>
  );
}

export default Brands;
