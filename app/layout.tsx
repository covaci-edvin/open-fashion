import type { Metadata } from "next";
import "./styles/styles.scss";
import "/public/assets/icons/icomoon/icon-font.css";
import { tenorSans } from "./ui/fonts";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

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
      <body className={tenorSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
