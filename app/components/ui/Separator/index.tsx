import Image from "next/image";
import styles from "./Separator.module.scss";
import SeparatorSvg from "@/app/assets/svgs/separator.svg";

function Separator() {
  return (
    <div className={styles.container}>
      <Image src={SeparatorSvg} height={10} width={125} alt="separator" />
    </div>
  );
}

export default Separator;
