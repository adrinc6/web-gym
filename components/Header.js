// components/Header.js
import Image from 'next/image';
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Logo" width={80} height={80} />
        </div>
      </Link>
      <Link href="/">
        <h1 className={styles.title}>
          Tips de Entrenamientos en Casa
        </h1>
      </Link>
      <button className={styles.subscribeBtn}>Suscribirse a la newsletter</button>
    </header>
  );
}
