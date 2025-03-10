export class Task {
    id: number;
    title: string;
    description: string;
    isCompleted: boolean;

    constructor(id: number, title: string, description: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.isCompleted = false;
    }

    markAsCompleted(): void {
        this.isCompleted = true;
    }

    display(): void {
        console.log(`ID: ${this.id}, Title: ${this.title}, Completed: ${this.isCompleted}`);
    }
}
