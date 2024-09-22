import styles from './activitycard.module.css'
import data from '../../data.json'
import { useState, useEffect } from 'react'

export default function ActivityCard({ timePeriod } : { timePeriod: string }) {
    const [userData, setUserData] = useState(data)

    useEffect(() => {
        setUserData(data)
    }, [])

    return (
        userData.map((data) => (
            <div className={styles.activityCard} key={data.title} style={{backgroundImage: `url(${data.icon})`, backgroundColor: `${data.bgColor}`}}>
                <div className={styles.card}>
                    
                    <p className={styles.title}>{data.title}</p> 
                
                    <h2 className={styles.time}>{data.timeframes[`${timePeriod}` as keyof typeof data.timeframes].current}hrs</h2>
                
                    <img className={styles.dots} src="src/assets/images/icon-ellipsis.svg" alt="dots"/>
                
                    <p className={styles.previous}>Last Week - {data.timeframes[`${timePeriod}` as keyof typeof data.timeframes].previous}hrs</p>
                    
                </div>
            </div>
        ))
    )
}