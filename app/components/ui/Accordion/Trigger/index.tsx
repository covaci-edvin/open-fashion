import React, { ReactNode, forwardRef, Ref } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import styles from "./Trigger.module.scss";
import Icon from "../../Icon";

type Props = {
  children: ReactNode;
};

const AccordionTrigger = forwardRef(
  ({ children, ...props }: Props, forwardedRef: Ref<HTMLButtonElement>) => {
    return (
      <Accordion.Header>
        <Accordion.Trigger
          className={styles.trigger}
          {...props}
          ref={forwardedRef}
        >
          {children}
          <Icon name="chevron-down" />
        </Accordion.Trigger>
      </Accordion.Header>
    );
  }
);

AccordionTrigger.displayName = "AccordionTrigger";

export default AccordionTrigger;
