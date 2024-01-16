import type { Metadata } from "next";
import "./styles/globals.css";
import "./styles/variables.css";
import "./assets/icons/icomoon/icon-font.css";
import { tenorSans } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Open Fashion",
  description: "e-commerce practice project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={tenorSans.className}>{children}</body>
    </html>
  );
}
