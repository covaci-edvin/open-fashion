import Image from "next/image";
import styles from "./GridView.module.scss";
import commonStyles from "./CommonStyles.module.scss";
import { ProductsProps } from "../types";
import Text from "../../Text";
import FavoriteButton from "../../FavoriteButton";

function Gridview({
  images,
  name,
  shortDescription,
  price,
  id,
  url,
}: ProductsProps) {
  const productHref = `${url}/${id}`;

  return (
    <a href={productHref} className={`${styles.wrapper} link`}>
      <div className={styles["img-wrapper"]}>
        <Image
          className={styles.img}
          src={images[0]}
          alt={name}
          height={220}
          width={165}
        />
        <FavoriteButton />
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
    </a>
  );
}

export default Gridview;
