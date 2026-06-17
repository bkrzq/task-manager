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



addTask("study javascript", 1)
console.log("Before:", tasks)
removeTask(101)
console.log("After:", tasks)
