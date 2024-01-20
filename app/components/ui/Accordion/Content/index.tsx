import React, { ReactNode, Ref } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import styles from "./Content.module.scss";

type Props = {
  children: ReactNode;
  className?: string;
};

const AccordionContent = React.forwardRef(
  (
    { children, className, ...props }: Props,
    forwardedRef: Ref<HTMLDivElement>
  ) => (
    <Accordion.Content
      {...props}
      ref={forwardedRef}
      className={styles.container}
    >
      {children}
    </Accordion.Content>
  )
);

AccordionContent.displayName = "AccordionContent";

export default AccordionContent;
