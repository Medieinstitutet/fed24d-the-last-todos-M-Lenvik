//components/ToDoApp.tsx

import { useState } from "react";
import { ToDo } from "../models/ToDo";

export const ToDoApp = () => {
    const [todos, setTodos] = useState<ToDo[]>([

        new ToDo(1, "Plugga", 2, false),
        new ToDo(2, "Träna", 3, false),
        new ToDo(2, "Jobba", 1, true),
    ]);

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
                        Status: {todo.isDone ? "✅ Klar" : "❌ Ej klar"}
                    </li>
                </ul>
            ))}
        </div>
      {/* Additional components and logic will go here */}
    </div>
  );
}