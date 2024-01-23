type TextVariants =
  | "title"
  | "subtitle-lg"
  | "subtitle-sm"
  | "body-lg"
  | "body-md"
  | "body-sm";

type Props = {
  type?: TextVariants;
  children: React.ReactNode;
};

function Text({ type = "body-lg", children }: Props) {
  if (type === "title") return <h1 className="title">{children}</h1>;

  if (type === "subtitle-lg")
    return <h2 className="subtitle-lg">{children}</h2>;

  if (type === "subtitle-sm")
    return <h3 className="subtitle-sm">{children}</h3>;

  return <p className={type}>{children}</p>;
}

export default Text;
