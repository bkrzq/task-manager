const { tasks } = require("./data")

const addTask = (title, userId) => {
    const newTask = {
        id: Date.now(),
        title: title,
        done: false,
        userId: userId
    }
    tasks.push(newTask)
    return newTask
}

const removeTask = (id) => {
    const index = tasks.findIndex((task) => task.id === id)
    tasks.splice(index, 1)
}

const completeTask = (id) => {
    const task = tasks.find((task) => task.id === id)
    task.done = true
}

const getUserTasks = (userId) => {
    return tasks.filter((task) => task.userId === userId)
}

module.exports = { addTask, removeTask, completeTask, getUserTasks }
