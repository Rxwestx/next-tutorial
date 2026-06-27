import Link from 'next/link'
import React from 'react'
import styles from './Nav.module.css'
export default function Nav() {
  return (
    <div className={styles.Nav}>
        <Link href="/" className={styles.NavLink}>Home</Link>
        <Link href="/history" className={styles.NavLink}>History</Link>
    </div>
  )
}
