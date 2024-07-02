import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import ButtonLink from "@/components/ButtonLink";

export default function Home() {
  return (
    <>
      <Header title="Welcome to Lithia Motors Service!" />

      <section className={styles.container}>
        <div className={styles.coverImage}>
          <Image
            src="cover.svg"
            width="460"
            height="328"
            alt="Lithia Motor Services"
          />
        </div>

        <p className={styles.description}>
          Lithia motors wants to put you in full control of your car-owning
          experience by providing eat to book service appointments from the
          comfort of your own home!
        </p>

        <div className={styles.buttonContainer}>
          <ButtonLink title="Get Started" href="/services" />
        </div>
      </section>
    </>
  );
}
