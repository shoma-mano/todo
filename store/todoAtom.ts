import { atom } from 'jotai'
import {string} from "prop-types";

export interface todoList {
    taskName:string;
    energyCost:1|2|3;
    priority:1|2|3;
    isCompleted:boolean;
    dueDay?:number;
    dueMonth?:number;
}

// Create your atoms and derivatives
export const todoListAtom = atom<todoList[]>([])