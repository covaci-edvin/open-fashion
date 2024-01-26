type TextVariants =
  | "title"
  | "subtitle-lg"
  | "subtitle-sm"
  | "body-lg"
  | "body-md"
  | "body-sm";

type Props = {
  type?: TextVariants;
  className?: string;
  children: React.ReactNode;
};

function Text({ type = "body-lg", children, className = "" }: Props) {
  if (type === "title")
    return <h1 className={`title ${className}`}>{children}</h1>;

  if (type === "subtitle-lg")
    return <h2 className={`subtitle-lg ${className}`}>{children}</h2>;

  if (type === "subtitle-sm")
    return <h3 className={`subtitle-sm ${className}`}>{children}</h3>;

  return <p className={`${type} ${className}`}>{children}</p>;
}

export default Text;
