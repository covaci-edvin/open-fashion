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
  const url: string = "products";

  if (variant === "listview") return <Listview {...product} url={url} />;
  if (variant === "gridview") return <Gridview {...product} url={url} />;
  if (variant === "homepage") return <Homepage {...product} url={url} />;
  if (variant === "full") return <Full {...product} url={url} />;

  return <div>Product</div>;
}

export default Product;
