import { atom } from 'jotai'
import { string } from "prop-types";

export interface todoList {
    taskName: string;
    energyCost: 1 | 2 | 3;
    priority: 1 | 2 | 3;
    isCompleted: boolean;
    dueDay?: number;
    dueMonth?: number|string;
}

// Create your atoms and derivatives
export const todoListAtom = atom<todoList[]>([])
export const readWriteTodoListAtom = atom(
    get => get(todoListAtom),
    (_, set, newTodoList: todoList[]) => {
        const months= ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
        newTodoList = newTodoList.map((todo) => ({
            ...todo,
            dueMonth: todo.dueMonth? months[Number(todo.dueMonth) - 1]: undefined
        }))
        set(todoListAtom, newTodoList)
    }
)