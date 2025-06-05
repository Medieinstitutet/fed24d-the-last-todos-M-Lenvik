//components/ToDoList.tsx
import type { ToDo } from "../models/ToDo";
import { ToDoPresentation } from "./ToDoPresentation";

type ToDoListProps = {
    todos: ToDo [];
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
};

export const ToDoList = ({todos, onDelete, onToggle}: ToDoListProps)=> {
    return ( 
        <>
            <div>
                {todos.map(todo => (
                    <ToDoPresentation
                        key={todo.id}
                        todo={todo}
                        onDelete={onDelete}
                        onToggle={onToggle}
                    />
                ))}
            </div>
        </>
    );
    //{todos.filter.map((t) => ( //Här är ett bra ställe att göra filtrerinagr och sökfuktioner
}