import Link from 'next/link';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      {/* Barra superior encima de la ventana */}
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
        <div className={styles.siteName}>Entrena en Casa</div>
        <nav className={styles.topNav}>
          <Link href="/rutinas" className={styles.topButton}>Rutinas</Link>
          <Link href="/ejercicios" className={styles.topButton}>Ejercicios</Link>
        </nav>
        </div>
      </div>

      <main className={styles.main}>
        <section className={styles.contentWindow}>
          {children}
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2025 Entrena en Casa - Creado por Adrián</p>
      </footer>
    </>
  );
}
