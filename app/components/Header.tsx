import Link from 'next/link';
import styles from './Header.module.css';


{/* <nav>
  <ul>
    <li><Link href="/">Home</Link></li>
   
 
  </ul>
</nav> */}

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}> Muhammad Hamza & Sons</div>
      <nav>
        <ul className={styles.navList}>
          <li><Link href="/" className={styles.navItemLink}>Home</Link></li>
          <li><Link href="/services" className={styles.navItemLink}>Services</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
