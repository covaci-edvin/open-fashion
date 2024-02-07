import Image from "next/image";
import styles from "./Slide.module.scss";

type Props = {
  imageUrl: string;
};

function HeroSlide({ imageUrl }: Props) {
  return (
    <div className={styles.container}>
      <Image
        quality={100}
        priority
        src={imageUrl}
        height={600}
        width={375}
        alt="collection"
      />
    </div>
  );
}

export default HeroSlide;
