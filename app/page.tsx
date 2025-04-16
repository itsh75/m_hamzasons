import About from './about/page';
import styles from './styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <section className={styles.hero}>
      <h1>Grow Your Brand with Confidence</h1>
      <p>We deliver data-driven marketing strategies that turn traffic into revenue.</p>
      <Link href="/services" className={styles.button}>See Our Services</Link>
    </section>
  );
}
