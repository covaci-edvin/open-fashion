import { MouseEventHandler, ReactNode } from "react";
import styles from "./Tag.module.scss";
import Icon from "../Icon";

type Props = {
  children: ReactNode;
  onClose?: MouseEventHandler<HTMLButtonElement>;
  type?: "hash-tag" | "filter-tag";
};

function Tag({ children, onClose, type = "hash-tag" }: Props) {
  const tagClassNames = `${styles.tag} body-md ${
    type === "hash-tag" ? styles.hash : styles.filter
  }`;

  return (
    <span className={tagClassNames}>
      {type === "hash-tag" && "#"}
      {children}
      {type === "filter-tag" && (
        <button onClick={onClose} className={styles.close}>
          <Icon name="close" size={16} />
        </button>
      )}
    </span>
  );
}

export default Tag;
