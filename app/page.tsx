'use client'

import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {CoolButton} from "../components/CoolButton/CoolButton";
import {useRouter} from "next/navigation";

const Home = () => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <main className={`${styles.main} ${styles.title}`}>
                <div className={styles.titleWrapper}>
                    <Image src={"/TODO_.png"} width={240} height={50} alt={'todo'}></Image>
                    <CoolButton onClick={()=>router.push('/menus/note')}  text={'Getting Started'}></CoolButton>
                </div>
            </main>
        </div>
    )
}

export default Home
