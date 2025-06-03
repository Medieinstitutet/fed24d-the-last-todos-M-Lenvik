// components/SortMenu.tsx
import type { ChangeEvent } from "react";

type SortBy = "priority" | "task" | "done" | "createdAt";

interface SortMenuProps {
    sortBy: SortBy;
    onChange: (value: SortBy) => void;
}

export const SortMenu = ({ sortBy, onChange }: SortMenuProps) => {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as SortBy);
    };

    return (
        <div>
            <label>Sortera efter: </label>
            <select value={sortBy} onChange={handleChange}>
                <option value="priority">Prioritet</option>
                <option value="task">Uppgift (A → Ö)</option>
                <option value="done">Status (Ej klar → Klar)</option>
                <option value="createdAt">Datum (Nyast först)</option>
            </select>
        </div>
    );
};