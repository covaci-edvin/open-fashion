import styles from "./Product.module.scss";
import Full from "./Variants/Full";
import Gridview from "./Variants/Gridview";
import Homepage from "./Variants/Homepage";
import Listview from "./Variants/Listview";
import { Product, ProductVariants } from "./types";

type Props = {
  variant: ProductVariants;
  product: Product;
};

function Product({ variant, product }: Props) {
  if (variant === "listview") return <Listview {...product} />;
  if (variant === "gridview") return <Gridview {...product} />;
  if (variant === "homepage") return <Homepage {...product} />;
  if (variant === "full") return <Full {...product} />;

  return <div>Product</div>;
}

export default Product;
