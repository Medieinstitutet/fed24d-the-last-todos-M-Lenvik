//components/ToDoApp.tsx
import { useEffect, useState } from "react";
import { ToDo } from "../models/ToDo";
import { ToDoList } from "./ToDoList";
import { AddToDo } from "./AddToDo";
import { SortMenu } from "./sortMenu";
import { Button } from "./Button";
import { GreetingDoneToDo } from "./GreetingDoneTodo";

export const ToDoApp = () => {
    const [todos, setTodos] = useState<ToDo[]>(() => {
    
        const saved = localStorage.getItem("todos");
        if (saved) {
            return JSON.parse(saved).map((t: ToDo) => new ToDo(t.id, t.task, t.priority, t.isDone));
        }

        return ([
            new ToDo(1, "Plugga", 2, false),
            new ToDo(2, "Träna", 4, false),
            new ToDo(3, "Gör React uppgiften", 1, false),
            new ToDo(4, "Jobba", 3, false),
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
    const sortedTodos = [...todos].sort((b, a) => {
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
            <div className="p-0">
                {activeTodos.length > 0 ? (
                    <div className="bg-amber-500 border-4 border-amber-800 rounded-xl p-4 mb-10">

                        <h1 className="text-4xl font-caveat font-bold mb-4">Mina To-Do's</h1>
                        <SortMenu sortBy={sortBy} onChange={setSortBy} />
                        <ToDoList todos={activeTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
                    </div>
                ) : (
                    <div className="bg-amber-500 border-4 border-amber-800 rounded-xl p-20 mt-10 mb-20 text-4xl font-caveat font-bold">
                        <p>Du har inga uppgifter!</p>
                        <p><GreetingDoneToDo /></p>
                    </div>
                )}

                <div className="bg-amber-500 border-4 border-amber-800 rounded-xl p-4 mb-10">

                    <AddToDo addTodo={addToDo} />
                </div>
                
                {showDoneTodos && (
                    <div className="bg-amber-500 border-4 border-amber-800 rounded-xl p-4 mb-10">

                        <h2 className="text-4xl font-caveat font-bold mb-4">Wo-ho! <br/>Detta har jag klarat av!</h2>
                        <SortMenu sortBy={sortBy} onChange={setSortBy} />
                        <ToDoList todos={doneTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
                    </div>
                )}
                
                <div className="flex flex-wrap justify-center gap-3 mb-4">
                    {doneTodos.length > 0 && (
                        <Button 
                        onClick={() => setShowDoneTodos(prev => !prev)}  
                        className="bg-yellow-200 hover:bg-yellow-600 transition-colors duration-300"
                        >
                        {showDoneTodos ? "Dölj avklarade uppgifter" : "Visa avklarade uppgifter"}
                        </Button>
                    )}
                    <Button 
                        onClick={resetTodos}  
                        className="bg-orange-600 hover:bg-orange-700 transition-colors duration-300">
                        Återställ till startuppgifter
                    </Button>
                </div>
            </div>
        </>
    );
}