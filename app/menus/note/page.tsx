'use client'
import { inspect } from "util";
import Image from "next/image";
import c from 'clsx'
import styles from "../../../styles/Note.module.css";
import { CoolButton } from "../../../components/CoolButton/CoolButton";
import { useAtom } from "jotai";
import { readWriteTodoListAtom, todoListAtom } from "../../../store/todoAtom";
import { useRouter } from "next/navigation";
import { useFlashIconGroup } from "../../../components/FlashIconGroup/useFlashIconGroup";
import { FlashIcon } from "../../../components/Icon/FlashIcon";

const Note = () => {
    const [todoList, setTodoList] = useAtom(readWriteTodoListAtom);

    const router = useRouter();
    const onClickNewButton = () => {
        router.push("/menus/newnote")
    }
    const { FlashIconGroup } = useFlashIconGroup({ isChangeable: false });

    const taskPriorityStyle = (priority: number) => c(styles.runTaskNameWrapper, {
        [ styles.priorityLow ]: priority === 1,
        [ styles.priorityMedium ]: priority === 2,
        [ styles.priorityHigh ]: priority === 3,
    })

    const onClickCompleteButton = (index: number) => {
        const newTodoList = [...todoList]
        newTodoList[ index ].isCompleted = true
        setTodoList(newTodoList)
    }

    return (
        <>
            <div className={styles.noteContainer}>
                <h1 className={styles.backLogsTitle}>BACKLOGS</h1>
                <ul>
                    {todoList.map((todo, index) => {
                        return (todo.isCompleted ? null :
                                <li key={index}>
                                    <div className={taskPriorityStyle(todo.priority)}>
                                        <button onClick={() => onClickCompleteButton(index)}
                                                className={styles.completeButton}></button>
                                        <span>{todo.taskName}</span>
                                    </div>
                                    <div className={styles.taskCostWrapper}>
                                        <span>{todo.dueDay} {todo.dueMonth}</span>
                                    </div>
                                </li>
                        )
                    })}
                </ul>
                <h1 className={styles.backLogsTitle}>COMPLETED</h1>
                <ul>
                    {todoList.map((todo, index) => {
                        return (todo.isCompleted ?
                                <li>
                                    <div className={styles.runTaskNameWrapper}>
                                        <span>{todo.taskName}</span>
                                    </div>
                                    <FlashIconGroup defaultCost={todo.energyCost}/>
                                </li> : null
                        )
                    })}
                </ul>
                <CoolButton onClick={onClickNewButton} text={'New'} className={styles.newButton}></CoolButton>
                <h1 className={styles.scoreTitle}>SCORE</h1>
                <div className={styles.scoreContainer}>
                    <FlashIcon height={80} width={80} color={'#78ACD5'}></FlashIcon>
                    <span>{
                        todoList.reduce((val, nextVal) => {
                            return val + (nextVal.isCompleted? nextVal.energyCost:0)
                        }, 0)
                    }
                    </span>
                </div>
            </div>
        </>
    );
}

export default Note;