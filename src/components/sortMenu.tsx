// components/SortMenu.tsx
import type { ChangeEvent } from "react";

type SortBy = "priority" | "task" | "createdAt";

interface SortMenuProps {
    sortBy: SortBy;
    onChange: (value: SortBy) => void;
}

export const SortMenu = ({ sortBy, onChange }: SortMenuProps) => {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as SortBy);
    };

    return (

        <div className=" bg-amber-100 mx-auto mb-2 border border-solid border-b-black p-2 rounded-xl shadow-[4px_4px_0_rgba(0,0,0,1)]
             sm:border sm:border-b-cyan-950 sm:rounded-md sm:mb-2 sm:w-[55%] sm:mx-auto">
            <label>Sortera efter: </label>
            <select value={sortBy} onChange={handleChange}>
                <option value="priority">Prioritet</option>
                <option value="task">Uppgift (A → Ö)</option>
                <option value="createdAt">Datum (Nyast först)</option>
            </select>
        </div>
    );
};