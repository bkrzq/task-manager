const { addTask, removeTask, completeTask, getUserTasks } = require("./tasks")

console.log("=== Tasks at start ===")
console.log(getUserTasks(1))

addTask("Learn React", 1)
console.log("=== After adding ===")
console.log(getUserTasks(1))

completeTask(101)
console.log("=== After completing ===")
console.log(getUserTasks(1))

removeTask(101)
console.log("=== After removing ===")
console.log(getUserTasks(1))
