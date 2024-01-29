import Image from "next/image";
import styles from "./Full.module.scss";
import commonStyles from "./CommonStyles.module.scss";
import { Product } from "../types";
import Text from "../../Text";
import FavoriteButton from "../../FavoriteButton";

function Full({ images, name, shortDescription, price }: Product) {
  return (
    <div className={styles.wrapper}>
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
    </div>
  );
}

export default Full;
