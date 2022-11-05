'use client'
import {useState} from "react";

export const useForm = () => {
    const [date, setDate] = useState<{
        day?: number;
        month?: number;
    }>();

    const [isDayValid, setIsDayValid] = useState(true);
    const [isMonthValid, setIsMonthValid] = useState(true);

    const onDateHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        if (name === 'day') {
            setIsDayValid(Number(value) <= 31 && Number(value) >= 1);
        }
        if(name === 'month') {
            setIsMonthValid(Number(value) <= 12 && Number(value) >= 1);
        }
        setDate({...date, [name]: value});
    };

    const [taskName, setTaskName] = useState("");
    const [isTaskNameValid, setIsTaskNameValid] = useState(true);

    const onTaskNameHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        console.log(value.length)
        setIsTaskNameValid(value.length > 0);
        setTaskName(value);
    }

    const validate = () => {
        setIsTaskNameValid(taskName.length > 0);
        return isDayValid && isMonthValid && 0 < taskName.length;
    }

    return {
        date,
        onDateHandleChange,
        isDayValid,
        isMonthValid,
        taskName,
        onTaskNameHandleChange,
        isTaskNameValid,
        validate,
    };
}