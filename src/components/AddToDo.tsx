//commponents/AddToDo.tsx

import { useState, type ChangeEvent, type FormEvent } from "react";
import { ToDo } from "../models/ToDo";

type AddToDoProps = {
    addTodo: (t: ToDo) => void;
};

export const AddToDo = ({ addTodo }: AddToDoProps) =>{
    const [todo, setTodo] = useState<ToDo>(new ToDo(0, "", 0, false));



    

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        if (e.target.type === "text") {
            setTodo({ ...todo, [e.target.id]: e.target.value });
        }
        if (e.target.type === "number" || e.target instanceof HTMLSelectElement) {
            setTodo({ ...todo, [e.target.id]: +e.target.value });
        }
        if (e.target.type === "checkbox") {
            setTodo({ ...todo, [e.target.id]: (e.target as HTMLInputElement).checked });
        }
    }


    const handleSubmit  = (e: FormEvent) => {
        e.preventDefault(); //förhindra att sidan laddas om

        addTodo(todo);
        setTodo(new ToDo(0, "", 0, false)); // återställ formuläret
        console.log("todo", todo);
    };


    
    return (
    <>
        <p>Det här är AddToDo och här ska formuläret in</p>

        <form onSubmit={handleSubmit }>
            {/*<!-- htmlFor för att texten Uppgift gör tillhörnade textruta i fokus-->*/}
        
            <div>
                <label htmlFor ="task"> Uppgift: </label>
                <input type="text" id="task" value={todo.task} onChange={handleChange}/>
            </div>
            <button>Spara</button>
        </form>
    </>
    );
};