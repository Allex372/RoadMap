import React from "react";

import frame from '../../image/frame.png';

import styles from './Task.module.css';

export const Task = ({ title, tasksArray }) => {
    return (
        <div className={styles.taskWrapper}>
            <div className={styles.insideWrapper}>
                <div className={styles.textWrapper}>
                    <p>{title}</p>
                    <ul>
                        {
                            tasksArray?.map((el) => (
                                <li>{el}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className={styles.imgWrapper}>
                <img src={frame} alt='frame' className={styles.frame} />
            </div>
        </div>
    )
}