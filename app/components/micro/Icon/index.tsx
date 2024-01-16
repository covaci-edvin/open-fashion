import React from "react";
import { Icons } from "./types";

type Props = {
  name: Icons;
  size?: number;
};

function Icon({ name, size = 24 }: Props) {
  return <span className={`icon-${name}`} style={{ fontSize: size }}></span>;
}

export default Icon;
