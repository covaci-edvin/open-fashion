import { MouseEventHandler } from "react";
import heartSVG from "@/public/assets/svgs/Heart.svg";
import styles from "./FavoriteButton.module.scss";
import Image from "next/image";

type Props = {
  isActive?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: number;
};

function FavoriteButton({ onClick, isActive = false, size = 16 }: Props) {
  const iconClassNames = `${styles.icon} ${isActive ? styles.active : ""}`;

  return (
    <button className={styles.btn} onClick={onClick}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={iconClassNames}
      >
        <path d="M2.77216 3.77216C0.40928 6.13503 0.409282 9.96602 2.77216 12.3289L11.937 21.4937L12 21.4307L12.0631 21.4938L21.2279 12.329C23.5908 9.96609 23.5908 6.13511 21.2279 3.77223C18.865 1.40936 15.034 1.40936 12.6712 3.77224L12.3536 4.08978C12.1584 4.28505 11.8418 4.28505 11.6465 4.08978L11.3289 3.77216C8.96601 1.40928 5.13503 1.40928 2.77216 3.77216Z" />
      </svg>
    </button>
  );
}

export default FavoriteButton;
