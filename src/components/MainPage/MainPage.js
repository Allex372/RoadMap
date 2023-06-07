import React from 'react';

import { Task } from '../index';

import styles from './MainPage.module.css';

const TasksArray = [
    {
        id: 1,
        title: 'Phase 1',
        tasks: ['Task 1', 'Task 2']
    },
    {
        id: 2,
        title: 'Phase 2',
        tasks: ['Task 2', 'Task 2']
    },
    {
        id: 3,
        title: 'Phase 3',
        tasks: ['Task 3', 'Task 3']
    },
    {
        id: 3,
        title: 'Phase 3',
        tasks: ['Task 3', 'Task 3']
    }
]

export const MainPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.flexWrapper}>
                <p className={styles.title}>RoadMap</p>
                <div className={styles.taskWrapper}>
                    {
                        TasksArray?.map(({ title, tasks, id }) => (
                            <Task title={title} tasksArray={tasks} key={id} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}