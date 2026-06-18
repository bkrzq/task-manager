const user = {
  id: 1,
  name: "Ahmed",
  email: "ahmed@gmail.com",
  password: "secret123"
 }



const tasks = [
  {
    id: 101,
    title: "buy groceries",
    done: false,
    userId: 1
   }
  ]


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
