// pages/Dashboard.js
import Link from 'next/link';
import styles from '@/styles/Dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <Link href="/find-a-job">
          <a>
            <button className={styles.button}>Find a Job</button>
          </a>
        </Link>
        <Link href="/create-a-job">
          <a>
            <button className={styles.button}>Create a Job</button>
          </a>
        </Link>
      </div>
    </div>
  );
}
