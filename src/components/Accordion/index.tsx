"use client";

import { ReactNode, useState } from "react";
import styles from "./Accordion.module.css";
import Icon, { IconProps } from "../Icon";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

type AccordionProps = {
  iconName?: IconProps["name"];
  title: string;
  children: ReactNode;
};

export default function Accordion({
  iconName,
  title,
  children,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  // This should probably be setup in the props to allow external control.
  // It's not needed for the current use case however.
  const onToggleOpen = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {iconName ? (
          <div style={{ flexBasis: "100px" }}>
            <Icon name={iconName} />
          </div>
        ) : null}

        <h2 className={styles.title}>{title}</h2>

        <div className={styles.chevron}>
          <button onClick={(evt) => onToggleOpen()} className={styles.button}>
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
      </header>
      {isOpen ? <div className={styles.childContainer}>{children}</div> : null}
    </div>
  );
}
