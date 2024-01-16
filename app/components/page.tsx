import Image from "next/image";
import Text from "./micro/Text";
import menuSvg from "@/app/assets/svgs/menu-burger.svg";
import Icon from "./micro/Icon";
import Logo from "./micro/Logo";

export default function Components() {
  return (
    <main>
      <Text type="title">Title</Text>
      <Text type="subtitle-lg">SubTitle Large</Text>
      <Text type="subtitle-sm">SubTitle Small</Text>
      <Text type="body-lg">Body Large</Text>
      <Text type="body-md">Body Medium</Text>
      <Text type="body-sm">Body Small</Text>
      <Icon name="chevron-right" size={24} />
      <Logo />
      <Logo size="lg" />
    </main>
  );
}
