"use client";

import styles from "./Accordion.module.scss";
import * as RadixAccordion from "@radix-ui/react-accordion";
import AccordionTrigger from "./Trigger";
import AccordionContent from "./Content";
import { ReactNode } from "react";
import Text from "../Text";

interface IItem {
  title: string;
  content: ReactNode;
}

interface IAccordionItemProps extends IItem {
  rootValue: string;
  itemIndex: number;
}

function AccordionItem({
  title,
  content,
  rootValue,
  itemIndex,
}: IAccordionItemProps) {
  return (
    <RadixAccordion.Item
      className={styles["accordion-item"]}
      value={`${rootValue}-item-${itemIndex}`}
    >
      <AccordionTrigger>
        <Text>{title}</Text>
      </AccordionTrigger>
      <AccordionContent>{content}</AccordionContent>
    </RadixAccordion.Item>
  );
}

type Props = {
  rootValue: string;
  items: IItem[];
};

function Accordion({ rootValue, items }: Props) {
  return (
    <RadixAccordion.Root
      className={styles.accordion}
      type="single"
      defaultValue={rootValue}
      collapsible
    >
      {items.map((item, index) => (
        <AccordionItem
          key={`${rootValue}-${index}`}
          title={item.title}
          content={item.content}
          rootValue={rootValue}
          itemIndex={index}
        />
      ))}
    </RadixAccordion.Root>
  );
}

export default Accordion;
