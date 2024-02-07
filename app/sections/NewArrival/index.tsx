import React from "react";
import styles from "./index.module.scss";
import Text from "@/app/components/ui/Text";
import Separator from "@/app/components/ui/Separator";
import { DUMMY_NEW_ARRIVAL_PRODUCTS } from "@/dummy-data";
import Product from "@/app/components/ui/Product";
import Link from "next/link";
import Icon from "@/app/components/ui/Icon";
import NewArrivalProductsLink from "./components/NewArrivalProductsLink";

function NewArrivalSection() {
  const newArrivalProductsHref = "/";

  return (
    <section className={`section section-top-margin`}>
      <div className={styles.heading}>
        <Text type="title">New Arrival</Text>
        <NewArrivalProductsLink
          href={newArrivalProductsHref}
          className={`${styles["explore-link"]} ${styles["explore-link-top"]}`}
        />
      </div>
      <Separator className={styles.separator} />
      <div className={styles.products}>
        {DUMMY_NEW_ARRIVAL_PRODUCTS.map((product, index) => (
          <Product variant="homepage" key={index} product={product} />
        ))}
      </div>
      <NewArrivalProductsLink
        href={newArrivalProductsHref}
        className={`${styles["explore-link"]} ${styles["explore-link-bottom"]}`}
      />
    </section>
  );
}

export default NewArrivalSection;
