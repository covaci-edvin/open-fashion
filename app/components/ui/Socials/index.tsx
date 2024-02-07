import Link from "next/link";
import styles from "./Socials.module.scss";
import Image from "next/image";

function Socials({ className = "" }: { className?: string }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <Link href="https://twitter.com/" target="_blank">
        <Image
          className={styles.icon}
          src={"/assets/svgs/socials/twitter.svg"}
          width={24}
          height={24}
          alt="twitter logo"
        />
      </Link>
      <Link href="https://instagram.com/" target="_blank">
        <Image
          className={styles.icon}
          src={"/assets/svgs/socials/instagram.svg"}
          width={24}
          height={24}
          alt="instagram logo"
        />
      </Link>
      <Link href="https://www.youtube.com/" target="_blank">
        <Image
          className={styles.icon}
          src={"/assets/svgs/socials/youtube.svg"}
          width={24}
          height={24}
          alt="youtube logo"
        />
      </Link>
    </div>
  );
}

export default Socials;
