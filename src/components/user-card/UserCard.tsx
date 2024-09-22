import styles from './usercard.module.css'
import { useState } from 'react'
import avatar from '../../assets/images/image-jeremy.png'


export default function UserCard({ setTimePeriod } : { setTimePeriod: (period: string) => void }) {

    const [active, setActive] = useState({
                                            daily: true,
                                            weekly: false,
                                            monthly: false
                                        })

    return (
        <div className={styles.userCard}>
            <div className={styles.card}>
                <img className={styles.image} src={avatar} alt="jeremy" />
                <p className={styles.title}>Report for <br /><span className={styles.name}>Jeremy Robson</span></p>
            </div>
            <div className={styles.timeframes}>
                <p className={styles.daily} style={active.daily ? {color: '#FFFFFF'} : {}} 
                    onClick={() => {setActive({daily: true, weekly: false, monthly: false}); setTimePeriod('daily')}}>Daily
                </p>
                <p className={styles.weekly} style={active.weekly ? {color: '#FFFFFF'} : {}} 
                    onClick={() => {setActive({daily: false, weekly: true, monthly: false}); setTimePeriod('weekly')}}>Weekly
                </p>
                <p className={styles.monthly} style={active.monthly ? {color: '#FFFFFF'} : {}} 
                    onClick={() => {setActive({daily: false, weekly: false, monthly: true}); setTimePeriod('monthly')}}>Monthly
                </p>
            </div>
        </div>
    )
}