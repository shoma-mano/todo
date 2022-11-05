'use client'
import {inspect} from "util";
import Image from "next/image";
import styles from "../../../styles/Note.module.css";
import {CoolButton} from "../../../components/CoolButton/CoolButton";
import {useAtom} from "jotai";
import {todoListAtom} from "../../../store/todoAtom";
import {useRouter} from "next/navigation";

const Note = () => {
    const [todoList, setTodoList] = useAtom(todoListAtom);

    const router = useRouter();
    const onClickNewButton = () => {
        router.push("/menus/newnote")
    }

    return (
        <>
            <div className={styles.noteContainer}>
                <h1 className={styles.backLogsTitle}>BACKLOGS</h1>
                <ul>
                    <li>
                        <div className={styles.runTaskNameWrapper}>
                            <button className={styles.completeButton}></button>
                            <span>HOMEWORK</span>
                        </div>
                        <div className={styles.taskCostWrapper}>
                            <span>9 Nov</span>
                        </div>
                    </li>
                </ul>
                <h1 className={styles.backLogsTitle}>COMPLETED</h1>
                <ul>
                    <li>
                        <div className={styles.runTaskNameWrapper}>
                            <span>HOMEWORK</span>
                        </div>
                        <div className={styles.taskCostWrapper}>
                            <Image src="/flash.png" alt="coin" width={20} height={20}/>
                            <Image src="/flash.png" alt="coin" width={20} height={20}/>
                            <Image src="/flash.png" alt="coin" width={20} height={20}/>
                        </div>
                    </li>
                </ul>
                <CoolButton onClick={onClickNewButton} text={'New'} className={styles.newButton}></CoolButton>
            </div>
        </>
    );
}

export default Note;