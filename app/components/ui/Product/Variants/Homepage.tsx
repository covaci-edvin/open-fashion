import Image from "next/image";
import styles from "./Homepage.module.scss";
import commonStyles from "./CommonStyles.module.scss";
import { ProductsProps } from "../types";
import Text from "../../Text";
import Link from "next/link";

function Homepage({
  id,
  images,
  name,
  shortDescription,
  price,
  url,
}: ProductsProps) {
  const productHref = `${url}/${id}`;

  return (
    <Link href={productHref} className={`${styles.wrapper} link`}>
      <div className={styles["img-wrapper"]}>
        <Image
          className={styles.img}
          src={images[0]}
          alt={name}
          height={200}
          width={165}
        />
      </div>

      <div className={styles["info-wrapper"]}>
        <Text className={styles.title} type="subtitle-sm">
          {name}
        </Text>
        <Text className={commonStyles.description} type="body-sm">
          {shortDescription}
        </Text>
        <div>
          <span className={`subtitle-lg ${commonStyles.price}`}>${price}</span>
        </div>
      </div>
    </Link>
  );
}

export default Homepage;
