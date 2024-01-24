import styles from "./Socials.module.scss";
import Image from "next/image";

function Socials({ className = "" }: { className?: string }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <a href="https://twitter.com/" target="_blank">
        <Image
          className={styles.icon}
          src={"/assets/svgs/socials/twitter.svg"}
          width={24}
          height={24}
          alt="twitter logo"
        />
      </a>
      <a href="https://instagram.com/" target="_blank">
        <Image
          className={styles.icon}
          src={"/assets/svgs/socials/instagram.svg"}
          width={24}
          height={24}
          alt="instagram logo"
        />
      </a>
      <a href="https://www.youtube.com/" target="_blank">
        <Image
          className={styles.icon}
          src={"/assets/svgs/socials/youtube.svg"}
          width={24}
          height={24}
          alt="youtube logo"
        />
      </a>
    </div>
  );
}

export default Socials;
