// /components/ToDoPresentation.tsx
import type { ToDo } from "../models/ToDo";
import { Button } from "./Button";

type ToDoPresentationProps ={
    todo: ToDo;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
};

export const ToDoPresentation = ({ todo,  onDelete, onToggle }: ToDoPresentationProps) => {
    return (
        <>
            <ul>
                <li><strong>ID: {todo.id}</strong></li>
                <li>Uppgift: {todo.task}</li>
                <li>Prioritet: {todo.priority}</li>
                <li>Status: {todo.isDone ? "✅" : "❌"}</li>
                <li>Skapad: {new Date(todo.createdAt).toLocaleString()}</li>
                <li>{todo.isDone ? "Jag måste göra detta igen.." : "Jag är färdig!"}:
                    <input type="checkbox" checked={todo.isDone} onChange={() => onToggle(todo.id)} />
                </li>

                <Button onClick={() => onDelete(todo.id)}>Ta bort</Button>
            </ul>
        </>
    );
    //Detta är det som loopas ut. Inget mer än nödvändigt för todo-listan får skrivas här.
}