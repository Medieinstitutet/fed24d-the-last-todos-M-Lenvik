//components/ToDoApp.tsx
import { useEffect, useState } from "react";
import { ToDo } from "../models/ToDo";
import { ToDoList } from "./ToDoList";
import { AddToDo } from "./AddToDo";
import { SortMenu } from "./sortMenu";
import { Button } from "./Button";
import { GreetingDoneToDo } from "./greetingDoneTodo";

export const ToDoApp = () => {
    const [todos, setTodos] = useState<ToDo[]>(() => {
    
        const saved = localStorage.getItem("todos");
        if (saved) {
            return JSON.parse(saved).map((t: ToDo) => new ToDo(t.id, t.task, t.priority, t.isDone));
        }

        return ([
            new ToDo(1, "Plugga", 5, true),
            new ToDo(2, "Träna", 4, false),
            new ToDo(3, "Gör React uppgiften", 4, false),
            new ToDo(4, "Jobba", 3, true),
        ]);

        
    });
    const [showDoneTodos, setShowDoneTodos] = useState(false);

    // Spara todos till localStorage varje gång listan ändras
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);    

    //lifting state upp addToDo    
    const addToDo = (todo: ToDo) => {
        let newId = 1;
        const allIds = todos.map(todo => todo.id);

        if (allIds.length > 0) {
            const highestId = Math.max(...allIds);
            newId = highestId + 1;
        }

        const newTodo = new ToDo(newId, todo.task, todo.priority, todo.isDone);
        setTodos([...todos, newTodo]); //lägg till den nya todo i todos arrayen
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
        console.log("Efter filter ", todos.filter((todos) => todos.id !== id));
    }

    // Sortering
    type SortBy = "priority" | "task" | "createdAt";
    const [sortBy, setSortBy] = useState<SortBy>("priority");
    const sortedTodos = [...todos].sort((a, b) => {
        if (sortBy === "priority") return b.priority - a.priority;
        if (sortBy === "task") return a.task.localeCompare(b.task);
        if (sortBy === "createdAt") return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        return 0;
    });

    // Dela upp todos i aktiva och avklarade
    const activeTodos = sortedTodos.filter(todo => !todo.isDone);
    const doneTodos = sortedTodos.filter(todo => todo.isDone);

    /*Developer mode**************************/
    const resetTodos = () => {
        localStorage.removeItem("todos");
        window.location.reload(); // laddar om för att återställa till hårdkodade
    };
    /*******************************/

    return (
        <>
            <div>
                <h1>To-Do App</h1>
                <h2>Mina To-Do's</h2>
                <div style={{ border: "1px solid black" }}>
                    <div>
                        <h4>Skapa ny To-Do</h4>
                        <AddToDo addTodo={addToDo} />
                    </div>

                    <h3>Saker jag har att göra</h3>
                    {activeTodos.length > 0 ? (
                        <div>
                            <SortMenu sortBy={sortBy} onChange={setSortBy} />
                            <ToDoList todos={activeTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
                        </div>
                    ) : (
                        <div>
                            <p>Du har inga uppgifter! ✨ </p>
                            <p><GreetingDoneToDo /></p>
                        </div>
                    )}

                    {showDoneTodos && (
                        <div>
                            <h3>Wo-ho! Detta har jag klarat av!</h3>
                            <SortMenu sortBy={sortBy} onChange={setSortBy} />
                            <ToDoList todos={doneTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
                        </div>
                    )}
                    
                    {doneTodos.length > 0 && (
                        <Button onClick={() => setShowDoneTodos(prev => !prev)}>
                        {showDoneTodos ? "Dölj avklarade uppgifter" : "Visa avklarade uppgifter"}
                        </Button>
                    )}
                </div>

                <Button onClick={resetTodos}>🔄 Återställ till startuppgifter</Button>
            </div>
        </>
    );
}