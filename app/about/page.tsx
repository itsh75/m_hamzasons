// export default function About(){
//     return(
//         <div>
//             <h2>About</h2>
//         </div>
//     )
// }
// app/about/page.tsx
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.about}>
      <h1>About Us</h1>
      <p>
        Welcome to our marketing website! We specialize in creating high-quality solutions for your business needs. Our team is dedicated to delivering exceptional results.
      </p>
    </div>
  );
}
