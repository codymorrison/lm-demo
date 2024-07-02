import styles from "./Header.module.css";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
    </div>
  );
}
