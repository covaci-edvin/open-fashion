import React from "react";
import Image from "next/image";

const sizes = {
  md: {
    width: 78,
    height: 32,
  },
  lg: {
    width: 97,
    height: 40,
  },
};

type Props = {
  size?: "md" | "lg";
};

function Logo({ size = "md" }: Props) {
  return (
    <Image
      src={"/assets/svgs/OF-Logo.svg"}
      width={sizes[size].width}
      height={sizes[size].height}
      alt="Open Fashion Logo"
    />
  );
}

export default Logo;
