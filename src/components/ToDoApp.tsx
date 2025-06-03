//components/ToDoApp.tsx

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { ToDo } from "../models/ToDo";
import { Button } from "./Button";
import { SortMenu } from "./sortMenu";

export const ToDoApp = () => {
    const [todos, setTodos] = useState<ToDo[]>(() => {
        const saved = localStorage.getItem("todos");
    
        if (saved) {
            return JSON.parse(saved).map((t: ToDo) => new ToDo(t.id, t.task, t.priority, t.isDone));
        }

        return ([
            new ToDo(1, "Plugga", 2, false),
            new ToDo(2, "Träna", 3, false),
            new ToDo(3, "Jobba", 1, true),
        ]);
    });

    /*<!-- value sätter defaultvärde i input rutan i formuläret nedan-->*/
    const [todo, setTodo] = useState<ToDo>(new ToDo(0, "", 0, false));


    // Spara todos till localStorage varje gång listan ändras
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

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

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault(); //förhindra att sidan laddas om
        let newId = 1;
        const allIds = todos.map(todo => todo.id);

        if (allIds.length > 0) {
            const highestId = Math.max(...allIds);
            newId = highestId + 1;
        }

        const newTodo = new ToDo(newId, todo.task, todo.priority, todo.isDone);

        setTodos([...todos, newTodo]); //lägg till den nya todo i todos arrayen
        setTodo(new ToDo(0, "", 0, false)); //nollställ formuläret efter submit
    };

    //markera todo som klar
    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo => 
            todo.id === id ? {...todo, isDone: !todo.isDone} : todo
        ));
    }

    //Ta bort todo
    const deleteTodo = (id: number) => {
        setTodos(todos.filter((t) => t.id !== id));
        console.log("Efter filter ", todos.filter((t) => t.id !== id));
    }


    
    type SortBy = "priority" | "task" | "done" | "createdAt";
    const [sortBy, setSortBy] = useState<SortBy>("priority");

    const sortedTodos = [...todos].sort((a, b) => {
        if (sortBy === "priority") return b.priority - a.priority;
        if (sortBy === "task") return a.task.localeCompare(b.task);
        if (sortBy === "done") return Number(a.isDone) - Number(b.isDone);
        if (sortBy === "createdAt") return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        return 0;
    });


    /*Developer mode**************************/
    const resetTodos = () => {
    localStorage.removeItem("todos");
    window.location.reload(); // laddar om för att återställa till hårdkodade
    };
    /*******************************/

    return (
        <div>
            <h1>To-Do App</h1>
            <div>
                {/* Developer mode: knappen för att återställa till startuppgifter */}
                <Button onClick={resetTodos}>🔄 Återställ till startuppgifter</Button>


                <p>Mina To-Do's</p>
                <SortMenu sortBy={sortBy} onChange={setSortBy} />
                {sortedTodos.map(todo => ( 
                    <ul key={todo.id}>
                        <li>
                            <strong>ID:</strong> {todo.id} <br />
                            Uppgift: {todo.task}
                            Prioritet: {todo.priority}
                            Markera som klar: <input type="checkbox" checked={todo.isDone} onChange={() => toggleTodo(todo.id)} />
                            Status: {todo.isDone ? "✅" : "❌"}
                            Skapad: {new Date(todo.createdAt).toLocaleString()}<br />
                            <Button onClick={() => deleteTodo(todo.id)}>Radera ToDo</Button>
                        </li>
                    </ul>
                ))}
            </div>

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
        </div>
    );
}