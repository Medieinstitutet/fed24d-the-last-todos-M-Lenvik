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
        <h2>Det här är ToDiList.tsx komponenten</h2>
        <p>Dess syfte är att presentera och loopa ToDoPresentation</p>

                <ul>
    {todos.map(todo => (
      <ToDoPresentation
        key={todo.id}
        todo={todo}
        onDelete={onDelete}
        onToggle={onToggle}
      />
    ))}
  </ul>



    </>
    );
    //{todos.filter.map((t) => ( //Här är ett bra ställe att göra filtrerinagr och sökfuktioner
}