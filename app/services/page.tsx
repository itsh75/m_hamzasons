import styles from './Services.module.css';

export default function Services() {
  return (
    <section className={styles.services}>
      <h2>What We Offer</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Social Media Management</h3>
          <p>Boost your online presence with tailored content and community building.</p>
        </div>
        <div className={styles.card}>
          <h3>SEO Optimization</h3>
          <p>Get found on Google and increase organic traffic to your site.</p>
        </div>
        <div className={styles.card}>
          <h3>Email Campaigns</h3>
          <p>Turn subscribers into customers with high-converting email sequences.</p>
        </div>
      </div>
    </section>
  );
}
