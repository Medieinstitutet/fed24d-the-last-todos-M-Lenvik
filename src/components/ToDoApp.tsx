//components/ToDoApp.tsx

import { useState } from "react";
import { ToDo } from "../models/ToDo";
import { Button } from "./Button";

export const ToDoApp = () => {
    const [todos, setTodos] = useState<ToDo[]>([
        new ToDo(1, "Plugga", 2, false),
        new ToDo(2, "Träna", 3, false),
        new ToDo(3, "Jobba", 1, true),
    ]);

        /*<!-- value sätter defaultvärde i input rutan i formuläret nedan-->*/
    const [todo, setTodo] = useState<ToDo>(new ToDo(0, "", 0, false));


        /**hanterar förändringar i inputrutan [e.target.id] kopplas till id i respektive input ruta
    Koppla sedan på handleChange på alla textrutor*/
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.type==="text"){
            setTodo({...todo, [e.target.id]: e.target.value});
        }
        if (e.target.type==="number"){
            setTodo({...todo, [e.target.id]: +e.target.value});
        }
        if (e.target.type==="checkbox"){
            setTodo({...todo, [e.target.id]: e.target.checked});
        }
    }

        const handleSubmit = (e: FormEvent) => {
        e.preventDefault(); //förhindra att sidan laddas om

        setTodos([...todos, todo]); //lägg till den nya todo i todos arrayen
        setTodo(new ToDo(0, "", 0, false)); //nollställ formuläret efter submit
    };

  return (
    <div>
        <h1>To-Do App</h1>
        <div>
            <p>Mina To-Do's</p>
            {todos.map(todo => ( 
                <ul key={todo.id}>
                    <li>
                        Uppgift: {todo.task}
                        Prioritet: {todo.priority}
                        Markera som klar: <input type="checkbox" checked={todo.isDone} readOnly/>
                        Status: {todo.isDone ? "✅" : "❌"}
                    </li>
                </ul>
            ))}
        </div>

        <form onSubmit={handleSubmit}>
        {/*<!-- htmlFor för att texten ID gör tillhörnade textruta i fokus-->*/}
        <div>
            <label htmlFor ="id"> Id: </label>
            <input type="number" id="id" value={todo.id} onChange={handleChange}/>
        {/*<!-- value sätter defaultvärde från stateHook ovan [person, setPerson]-->*/}
        </div>

        <div>
            <label htmlFor ="priority"> Prioritet 1-5: </label>
            <input type="number" id="priority" value={todo.priority} onChange={handleChange}/>
        </div>

        <div>
            <label htmlFor ="task"> Uppgift: </label>
            <input type="text" id="task" value={todo.task} onChange={handleChange}/>
        </div>
        <Button>Spara</Button>
    </form>
      {/*
      Additional components and logic will go here */}
    </div>
  );
}