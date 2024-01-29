import { Icons } from "./types";

type Props = {
  name: Icons;
  size?: number;
  color?: string;
};

function Icon({ name, color = "var(--color-black)", size = 24 }: Props) {
  return (
    <span
      className={`icon-${name}`}
      style={{ fontSize: size, color: color }}
    ></span>
  );
}

export default Icon;
