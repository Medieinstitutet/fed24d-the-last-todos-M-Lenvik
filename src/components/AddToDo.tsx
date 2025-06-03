//commponents/AddToDo.tsx
import { useState, type ChangeEvent, type FormEvent } from "react";
import { ToDo } from "../models/ToDo";
import { Button } from "./Button";

type AddToDoProps = {
    addTodo: (t: ToDo) => void;
};

export const AddToDo = ({ addTodo }: AddToDoProps) =>{
    const [todo, setTodo] = useState<ToDo>(new ToDo(0, "", 0, false));

    /**hanterar förändringar i inputrutan [e.target.id] kopplas till id i respektive input ruta
    Koppla sedan på handleChange på alla textrutor*/
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
            <form onSubmit={handleSubmit}>
                {/*<!-- htmlFor för att texten Uppgift gör tillhörnade textruta i fokus-->*/}
                <div>
                    <label htmlFor ="task"> Uppgift: </label>
                    <input type="text" id="task" value={todo.task} onChange={handleChange}/>
                </div>
                
                <div>
                    <label htmlFor ="priority"> Prioritet 1-5: </label>
                    <select id="priority" value={todo.priority} onChange={handleChange}>
                        <option value="">-- Välj prioritet --</option>
                        {[1, 2, 3, 4, 5].map(num => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </select>
                    {/*<!-- value sätter defaultvärde från stateHook ovan [person, setPerson]-->*/}
                </div>

                <Button>Spara</Button>
            </form>
        </>
    );
};