import Link from "next/link";
import styles from "./ButtonLink.module.css";

type ButtonLinkProps = {
  title: string;
  href: string;
  size?: "sm" | "md";
};

export default function ButtonLink({
  title,
  href,
  size = "md",
}: ButtonLinkProps) {
  return (
    <Link
      className={`${styles.container} ${size === "sm" ? styles.small : null}`}
      href={href}
    >
      {title}
    </Link>
  );
}
