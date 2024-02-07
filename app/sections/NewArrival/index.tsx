import React from "react";
import styles from "./index.module.scss";
import Text from "@/app/components/ui/Text";
import Separator from "@/app/components/ui/Separator";
import { DUMMY_NEW_ARRIVAL_PRODUCTS } from "@/dummy-data";
import Product from "@/app/components/ui/Product";
import Link from "next/link";
import Icon from "@/app/components/ui/Icon";

function NewArrivalSection() {
  return (
    <section className={`section section-top-margin`}>
      <div className={styles.heading}>
        <Text type="title">New Arrival</Text>
        <Link
          href="/"
          className={`${styles["explore-link"]} ${styles["explore-link-top"]} link`}
        >
          <span className="body-lg">Explore More</span>
          <Icon name="arrow-forward" size={18} />
        </Link>
      </div>
      <Separator className={styles.separator} />
      <div className={styles.products}>
        {DUMMY_NEW_ARRIVAL_PRODUCTS.map((product, index) => (
          <Product variant="homepage" key={index} product={product} />
        ))}
      </div>
      <Link
        href="/"
        className={`${styles["explore-link"]} ${styles["explore-link-bottom"]} link`}
      >
        <span className="body-lg">Explore More</span>
        <Icon name="arrow-forward" size={18} />
      </Link>
    </section>
  );
}

export default NewArrivalSection;
