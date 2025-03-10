"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
const Task_1 = require("../models/Task");
class TaskManager {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }
    addTask(title, description) {
        const task = new Task_1.Task(this.nextId++, title, description);
        this.tasks.push(task);
        return task;
    }
    getTasks() {
        return this.tasks;
    }
    markTaskAsCompleted(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.markAsCompleted();
            return true;
        }
        return false;
    }
    displayAllTasks() {
        this.tasks.forEach(task => task.display());
    }
}
exports.TaskManager = TaskManager;
