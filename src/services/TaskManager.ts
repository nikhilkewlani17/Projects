import { Task } from "../models/Task";

export class TaskManager {
    private tasks: Task[] = [];
    private nextId: number = 1;

    addTask(title: string, description: string): Task {
        const task = new Task(this.nextId++, title, description);
        this.tasks.push(task);
        return task;
    }

    getTasks(): Task[] {
        return this.tasks;
    }

    markTaskAsCompleted(id: number): boolean {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.markAsCompleted();
            return true;
        }
        return false;
    }

    displayAllTasks(): void {
        this.tasks.forEach(task => task.display());
    }
}
