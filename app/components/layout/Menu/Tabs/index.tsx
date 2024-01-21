import Text from "@/app/components/ui/Text";
import styles from "./Tabs.module.scss";
import * as Tabs from "@radix-ui/react-tabs";
import Accordion from "@/app/components/ui/Accordion";
import { WOMEN_MENU, MEN_MENU, KIDS_MENU } from "@/dummy-data";
import { ReactNode } from "react";
import { Link } from "../types";
import MenuLinksGroup from "../LinksGroup/MenuLinksGroup";

interface Item {
  title: string;
  content: Link[];
}

interface OutputItem {
  title: string;
  content: ReactNode;
}

function convertMenuContentToJSX(menuArray: Item[]): OutputItem[] {
  const newArr: OutputItem[] = [];

  menuArray.forEach((item, index) => {
    newArr[index] = {
      title: item.title,
      content: <MenuLinksGroup links={item.content} />,
    };
  });

  return newArr;
}

function MenuTabs() {
  const womenMenuItems = convertMenuContentToJSX(WOMEN_MENU);
  const menMenuItems = convertMenuContentToJSX(MEN_MENU);
  const kidsMenuItems = convertMenuContentToJSX(KIDS_MENU);

  return (
    <Tabs.Root className={styles.root} defaultValue="tab1">
      <Tabs.List className={styles.list} aria-label="menu">
        <Tabs.Trigger className={styles.trigger} value="tab1">
          <Text type="subtitle-sm">Women</Text>
        </Tabs.Trigger>
        <Tabs.Trigger className={styles.trigger} value="tab2">
          <Text type="subtitle-sm">Men</Text>
        </Tabs.Trigger>
        <Tabs.Trigger className={styles.trigger} value="tab3">
          <Text type="subtitle-sm">Kids</Text>
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className={styles.content} value="tab1">
        <Accordion rootValue="women" items={womenMenuItems} />
      </Tabs.Content>
      <Tabs.Content className={styles.content} value="tab2">
        <Accordion rootValue="men" items={menMenuItems} />
      </Tabs.Content>
      <Tabs.Content className={styles.content} value="tab3">
        <Accordion rootValue="kids" items={kidsMenuItems} />
      </Tabs.Content>
    </Tabs.Root>
  );
}

export default MenuTabs;
