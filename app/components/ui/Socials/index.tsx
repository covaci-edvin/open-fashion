import styles from "./Socials.module.scss";

import instagramIcon from "@/app/assets/svgs/socials/instagram.svg";
import twitterIcon from "@/app/assets/svgs/socials/twitter.svg";
import youtubeIcon from "@/app/assets/svgs/socials/youtube.svg";
import Image from "next/image";

function Socials() {
  return (
    <div className={styles.container}>
      <a href="https://twitter.com/" target="_blank">
        <Image
          className={styles.icon}
          src={twitterIcon}
          width={24}
          height={24}
          alt="twitter logo"
        />
      </a>
      <a href="https://instagram.com/" target="_blank">
        <Image
          className={styles.icon}
          src={instagramIcon}
          width={24}
          height={24}
          alt="instagram logo"
        />
      </a>
      <a href="https://www.youtube.com/" target="_blank">
        <Image
          className={styles.icon}
          src={youtubeIcon}
          width={24}
          height={24}
          alt="youtube logo"
        />
      </a>
    </div>
  );
}

export default Socials;
