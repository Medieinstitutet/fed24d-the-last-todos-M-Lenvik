//components/ToDoList.tsx
import type { ToDo } from "../models/ToDo";
import { ToDoPresentation } from "./ToDoPresentation";


type ToDoListProps = {
    todos: ToDo [];
};

export const ToDoList = ({todos}: ToDoListProps)=> {
    return ( 
    <>
        <h2>Det här är ToDiList.tsx komponenten</h2>
        <p>Dess syfte är att presentera och loopa ToDoPresentation</p>
        {todos.map((t) => (
        //{todos.filter.map((t) => ( //Här är ett bra ställe att göra filtrerinagr och sökfuktioner
            <ToDoPresentation /*key={t.id}*/ todo={t}/>
        ))}
    </>
    );
}