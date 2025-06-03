//models/ToDo.ts
export class ToDo{
    id: number;
    task: string;
    priority: number;
    isDone: boolean;
    createdAt: string = new Date().toISOString();

    constructor (id: number, task: string, priority: number, isDone: boolean, createdAt: string = new Date().toISOString()) {
        this.id = id;
        this.task = task;
        this.priority = priority;
        this.isDone = isDone;
        this.createdAt = createdAt;
    }
}