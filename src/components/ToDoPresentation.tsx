// /components/ToDoPresentation.tsx
import type { ToDo } from "../models/ToDo";
import { Button } from "./Button";

type ToDoPresentationProps ={
    todo: ToDo;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
};

export const ToDoPresentation = ({ todo,  onDelete, onToggle }: ToDoPresentationProps) => {
    return (
        <>
<ul className="bg-white shadow-md border border-amber-200 rounded-xl p-6 space-y-2 mb-4">
  {/* Uppgift */}
  <li className="text-center">
    <span className="text-4xl font-caveat">{todo.task} 
        
        <span className="ml-1 text-sm text-gray-500 font-sans"> (Prioritet: {todo.priority})</span>
        </span>
  </li>

  {/* Box med två kolumner */}
  <li className="flex flex-col sm:flex-row justify-between gap-4 bg-amber-50 p-2 rounded-lg">
    
    {/* Vänstersida */}
    <div className="flex-1 space-y-1">

      <div>
        <div className="text-sm text-gray-500">Skapad:</div>
        <span className="ml-1 text-base text-gray-700">
            {new Date(todo.createdAt).toLocaleDateString("sv-SE", {
                year: "numeric",
                month: "long",
                day: "numeric"
            })}
        </span>
      </div>

    </div>

    {/* Högersida */}
    <div className="flex-1 flex flex-col items-end justify-center space-y-1">
    <span className="text-lg text-right">
        {todo.isDone ? "✅ Färdig" : "❌ Ej klar"}
    </span>
    
    </div>
  </li>




<li>
    <div className="flex items-center justify-around flex-wrap gap-3">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 accent-amber-500"
        />
        
        <span className="text-sm text-gray-500">
          {todo.isDone ? "Jag måste göra detta igen.." : "Jag är färdig!"}
        </span>
      </div>

      <Button onClick={() => onDelete(todo.id)} className="bg-red-400 hover:bg-red-500 transition-colors duration-300">Ta bort</Button>
    </div>
  </li>

</ul>
        </>
    );
    //Detta är det som loopas ut. Inget mer än nödvändigt för todo-listan får skrivas här.
}