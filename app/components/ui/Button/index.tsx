import Icon from "../Icon";
import { Icons } from "../Icon/types";
import Text from "../Text";
import styles from "./Button.module.scss";

type Sizes = "sm" | "md" | "lg";
type Types = "primary" | "outline";
type IconPosition = "right" | "left";

type Props = {
  text: String;
  type?: Types;
  size?: Sizes;
  iconName?: Icons | null;
  iconPosition?: IconPosition;
};

function Button({
  text,
  iconName = null,
  size = "sm",
  type = "primary",
  iconPosition = "right",
}: Props) {
  const classNames = `${styles.btn} ${styles[`btn--${type}`]} ${styles[size]} ${
    styles[iconPosition]
  }`;

  return (
    <button className={classNames}>
      <Text type="subtitle-lg">{text}</Text>
      {iconName && <Icon name={iconName} />}
    </button>
  );
}

export default Button;
