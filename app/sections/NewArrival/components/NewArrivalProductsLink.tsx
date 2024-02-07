import Link from "next/link";
import Icon from "@/app/components/ui/Icon";

function NewArrivalProductsLink({
  href,
  className = "",
}: {
  href: string;
  className?: string;
}) {
  return (
    <Link href={href} className={`${className} link`}>
      <span className="body-lg">Explore More</span>
      <Icon name="arrow-forward" size={18} />
    </Link>
  );
}

export default NewArrivalProductsLink;
