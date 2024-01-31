import { Tenor_Sans, Bodoni_Moda } from "next/font/google";

export const tenorSans = Tenor_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  style: "italic",
});
