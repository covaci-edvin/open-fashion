import styles from "./page.module.css";
import HeroSection from "./sections/Hero";
import NewArrivalSection from "./sections/NewArrival";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <NewArrivalSection />
    </main>
  );
}
