import { TaskManager } from "./services/TaskManager";

const taskManager = new TaskManager();

// Adding tasks
taskManager.addTask("Complete TypeScript project", "Implement a task manager in TypeScript.");
taskManager.addTask("Review PR", "Check and review the pull request for the new feature.");

// Display tasks
console.log("All Tasks:");
taskManager.displayAllTasks();

// Mark a task as completed
taskManager.markTaskAsCompleted(1);

console.log("\nUpdated Tasks:");
taskManager.displayAllTasks();
