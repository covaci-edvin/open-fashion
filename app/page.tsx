import styles from "./page.module.css";
import Brands from "./sections/Brands";
import HeroSection from "./sections/Hero";
import NewArrivalSection from "./sections/NewArrival";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <NewArrivalSection />
      <Brands />
    </main>
  );
}
