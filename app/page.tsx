import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {CoolButton} from "../components/CoolButton/CoolButton";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <main className={`${styles.main} ${styles.title}`}>
                <div className={styles.titleWrapper}>
                    <Image src={"/TODO_.png"} width={240} height={50} alt={'todo'}></Image>
                    <CoolButton></CoolButton>
                </div>
            </main>
        </div>
    )
}

export default Home
