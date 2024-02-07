import Image from "next/image";
import styles from "./Full.module.scss";
import commonStyles from "./CommonStyles.module.scss";
import { ProductsProps } from "../types";
import Text from "../../Text";
import FavoriteButton from "../../FavoriteButton";
import Link from "next/link";

function Full({
  images,
  name,
  shortDescription,
  price,
  id,
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
          height={457}
          width={343}
        />
        <FavoriteButton />
      </div>

      <div className={styles["info-wrapper"]}>
        <div>
          <Text className={styles.title} type="title">
            {name}
          </Text>
          <Text className={commonStyles.description} type="body-lg">
            {shortDescription}
          </Text>
        </div>
        <div className={styles["price-wrapper"]}>
          <span className={`subtitle-lg ${commonStyles.price}`}>${price}</span>
        </div>
      </div>
    </Link>
  );
}

export default Full;
