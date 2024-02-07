import Image from "next/image";
import styles from "./Listview.module.scss";
import commonStyles from "./CommonStyles.module.scss";
import { ProductsProps } from "../types";
import Text from "../../Text";
import FavoriteButton from "../../FavoriteButton";
import Link from "next/link";

function Listview({
  images,
  name,
  shortDescription,
  price,
  rating,
  id,
  url,
}: ProductsProps) {
  const productHref = `${url}/${id}`;

  return (
    <Link href={productHref} className={styles.wrapper}>
      <Image
        className={styles.img}
        src={images[0]}
        alt={name}
        height={134}
        width={100}
      />

      <div className={styles["info-wrapper"]}>
        <Text type="subtitle-sm">{name}</Text>
        <Text className={commonStyles.description} type="body-md">
          {shortDescription}
        </Text>
        <div>
          <span className={`subtitle-lg ${commonStyles.price}`}>${price}</span>
        </div>
        <div className={styles["bottom-wrapper"]}>
          <div className={styles["rating-wrapper"]}>
            <Image
              src={"/assets/svgs/rating.svg"}
              height={14}
              width={14}
              alt="rating"
            />
            <span className={styles.rating}>{rating} Ratings</span>
          </div>
          <FavoriteButton />
        </div>
      </div>
    </Link>
  );
}

export default Listview;
