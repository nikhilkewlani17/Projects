"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.isCompleted = false;
    }
    markAsCompleted() {
        this.isCompleted = true;
    }
    display() {
        console.log(`ID: ${this.id}, Title: ${this.title}, Completed: ${this.isCompleted}`);
    }
}
exports.Task = Task;
