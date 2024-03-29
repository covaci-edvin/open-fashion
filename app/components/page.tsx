import Text from "./ui/Text";
import Icon from "./ui/Icon";
import Logo from "./ui/Logo";
import Button from "./ui/Button";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Accordion from "./ui/Accordion";
import Tag from "./ui/Tag";
import Product from "./ui/Product";
import { DUMMY_PRODUCTS } from "@/dummy-data";

const DUMMY_MENU_ITEMS = [
  {
    title: "New",
    content: (
      <Text>
        This is the flippin contentThis is the flippin contentThis is the
        flippin contentThis is the flippin contentThis is the flippin
        contentThis is the flippin contentThis is the flippin content
      </Text>
    ),
  },
  {
    title: "Men",
    content: (
      <Text>
        This is the flippin contentThis is the flippin contentThis is the
        flippin contentThis is the flippin contentThis is the flippin
        contentThis is the flippin contentThis is the flippin content
      </Text>
    ),
  },
  {
    title: "Women",
    content: (
      <Text>
        This is the flippin contentThis is the flippin contentThis is the
        flippin contentThis is the flippin contentThis is the flippin
        contentThis is the flippin contentThis is the flippin content
      </Text>
    ),
  },
  {
    title: "Kids",
    content: (
      <Text>
        This is the flippin contentThis is the flippin contentThis is the
        flippin contentThis is the flippin contentThis is the flippin
        contentThis is the flippin contentThis is the flippin content
      </Text>
    ),
  },
];

export default function Components() {
  return (
    <main>
      <Header />
      <Product variant="listview" product={DUMMY_PRODUCTS[0]} />
      <div
        style={{
          margin: "2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          columnGap: "2rem",
        }}
      >
        <Product variant="gridview" product={DUMMY_PRODUCTS[1]} />
        <Product variant="gridview" product={DUMMY_PRODUCTS[2]} />
      </div>
      <div
        style={{
          margin: "2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          columnGap: "2rem",
        }}
      >
        <Product variant="homepage" product={DUMMY_PRODUCTS[3]} />
        <Product variant="homepage" product={DUMMY_PRODUCTS[3]} />
      </div>
      <Product variant="full" product={DUMMY_PRODUCTS[0]} />

      <Text type="title">Title</Text>
      <Text type="subtitle-lg">SubTitle Large</Text>
      <Text type="subtitle-sm">SubTitle Small</Text>
      <Text type="body-lg">Body Large</Text>
      <Text type="body-md">Body Medium</Text>
      <Text type="body-sm">Body Small</Text>
      <Icon name="chevron-right" size={24} />
      <Logo />
      <div style={{ display: "flex", gap: "30px" }}>
        <Tag>2021</Tag>
        <Tag>normalhashtag</Tag>
        <Tag type="filter-tag">Engagement Rings</Tag>
      </div>
      <Logo size="lg" />
      <Accordion rootValue="menu" items={DUMMY_MENU_ITEMS} />
      <div
        style={{
          display: "flex",
          gap: ".8rem",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <Button text={"Button Primary"} />
        <Button type="outline" text={"Button Outline"} />
        <Button
          text={"Button"}
          iconName={"arrow-backward"}
          iconPosition="left"
        />
        <Button
          type="outline"
          text={"Button"}
          iconName={"arrow-backward"}
          iconPosition="left"
        />
        <Button text={"Button Primary"} iconName={"arrow-forward"} />
        <Button
          type="outline"
          text={"Button Outline"}
          iconName={"arrow-forward"}
        />

        <Button size="lg" text={"4"} iconName={"arrow-forward"} />
      </div>

      <Footer />
    </main>
  );
}
