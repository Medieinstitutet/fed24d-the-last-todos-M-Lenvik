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
      <div className="bg-amber-300 border-4 border-amber-700 rounded-xl p-4 mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
          
          {/* Rad 1 & 2: Uppgift + Prioritet */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-2xl sm:text-3xl font-caveat">
            <span>{todo.task}</span>
            <span className="text-sm text-gray-900 font-sans mt-0">
              (Prioritet: {todo.priority})
            </span>
          </div>

          {/* Rad 3: Checkbox + knapp */}
          <div className="flex flex-row items-center justify-center gap-3 flex-wrap sm:flex-nowrap">
            <label className="flex items-center gap-2">
              <Button
                onClick={() => onToggle(todo.id)}
                className={`transition-colors duration-300
                  ${todo.isDone ?  ' bg-yellow-200 hover:bg-yellow-600' : ' bg-yellow-200 hover:bg-yellow-600'}`}>
                {todo.isDone ? `Jag måste ${todo.task} igen..` : 'Jag är färdig!'}
              </Button>
            </label>

              <Button
                onClick={() => onDelete(todo.id)}
                className="bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors duration-300 w-fit">
                Ta bort
              </Button>
          </div>
        </div>
      </div>
    </>
  );
  //Detta är det som loopas ut. Inget mer än nödvändigt för todo-listan får skrivas här.
}