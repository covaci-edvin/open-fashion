import Image from "next/image";
import styles from "./Separator.module.scss";

function Separator({ className = "" }: { className?: string }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <Image
        src={"/assets/svgs/separator.svg"}
        height={10}
        width={125}
        alt="separator"
      />
    </div>
  );
}

export default Separator;
