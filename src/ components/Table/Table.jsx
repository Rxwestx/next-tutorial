import React from 'react'
import styles from './Table.module.css' 
export default function Table() {
  return (
    <table className={styles.table}>
        <thead className={styles.tableHead}>
            <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Task</th>
                <th>Comment</th>
            </tr>
        </thead>
        <tbody className={styles.tableBody}>
            <tr>
                <td>2024-06-01</td>
                <td>John Doe</td>
                <td>Task 1</td>
                <td>Comment 1</td>
            </tr>
        </tbody>
    </table>
  )
}
