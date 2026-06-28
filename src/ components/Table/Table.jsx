import React from 'react'
import styles from './Table.module.css' 

const dummyData = [
    {
        date: "2024-06-01",
        name: "John Doe",
        task: "Task 1",
        comment: "Comment 1",
    },
    {
        date: "2024-06-02",
        name: "John Doe",
        task: "Task 1",
        comment: "Comment 2",
    },
    {
        date: "2024-06-03",
        name: "John Doe",
        task: "Task 1",
        comment: "Comment 3",
    },
];

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
            {dummyData.map(item => ( 
                <tr >
                    <td>{item.date}</td>
                    <td>{item.name}</td>
                    <td>{item.task}</td>
                    <td>{item.comment}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}
