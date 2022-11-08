'use client'
import s from "./NewNote.module.sass";
import { useState } from "react";
import { readWriteTodoListAtom } from "../../../store/todoAtom";
import { useAtom } from "jotai";
import { CoolButton } from "../../../components/CoolButton/CoolButton";
import { useRouter } from "next/navigation";
import { useForm } from "./useForm";
import { useFlashIconGroup } from "../../../components/FlashIconGroup/useFlashIconGroup";
import Link from "next/link";

const NewNote = () => {
    const [todoList, setTodoList] = useAtom(readWriteTodoListAtom);
    const {
        date,
        isDayValid,
        isMonthValid,
        onDateHandleChange,
        onTaskNameHandleChange,
        taskName,
        isTaskNameValid,
        validate
    } = useForm()
    const [priority, setPriority] = useState<1 | 2 | 3>(1);
    const { FlashIconGroup, energyCost } = useFlashIconGroup({isChangeable: true});
    const router = useRouter();

    const addTask = () => {
        console.log('add task')
        if (!validate()) return
        setTodoList([...todoList, {
            taskName,
            priority,
            energyCost,
            isCompleted: false,
            dueDay: date?.day,
            dueMonth: date?.month,
        }])
        router.push("/menus/note")
    }

    const priorityButtonClassNames = [
        s.priorityLowButton,
        s.priorityMediumButton,
        s.priorityHighButton,
    ]

    const isAllValid = isDayValid && isMonthValid && 0 < taskName.length;

    return (
        <>
            <div className={s.menuContainer}>
                <div className={s.menuItemContainer}>
                    <div className={s.menuItem}>
                        <span>Name</span>
                        <input className={`${isTaskNameValid ? '' : s.invalidForm}`} onInput={onTaskNameHandleChange}
                               placeholder={'task name here'}></input>
                    </div>
                    <div className={s.menuItem}>
                        <span>Date</span>
                        <div className={s.dateInput}>
                            <input autoComplete={'off'} className={`${isMonthValid ? '' : s.invalidForm}`} name={'month'}
                                   onInput={onDateHandleChange} type={"number"}
                                   placeholder={'MM'}>
                            </input>
                            <input autoComplete={'off'} className={`${isDayValid ? '' : s.invalidForm}`} name={'day'}
                                   onInput={onDateHandleChange} type={"number"}
                                   placeholder={'DD'}>
                            </input>
                        </div>
                    </div>
                    <div className={s.menuItem}>
                        <span>Priority</span>
                        <div className={s.priorityButtonContainer}>
                            {priorityButtonClassNames.map((className, index) => {
                                return (
                                    <button
                                        key={index}
                                        className={`${className} ${priority === index + 1 ? s.priorityButtonActive : ""}`}
                                        onClick={() => setPriority((index + 1) as 1 | 2 | 3)}>
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                    <div className={s.menuItem}>
                        <span>Energy costs</span>
                        <FlashIconGroup/>
                    </div>
                </div>
                <CoolButton text={'SAVE'} className={`${s.saveButton} ${isAllValid ? '' : s.invalidButton}`} onClick={addTask}/>
                <Link href={'/menus/note'}></Link>
            </div>
        </>
    )
}

export default NewNote;