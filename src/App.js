import './App.css';
import { useState } from 'react';
import { ToDoItem } from './components/ToDoItem';
import { ToDoList } from './components/TodoList';


function App() {
  const [todo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState('');


  const addTask = () => {
    if (newTask) {
      let num = todo.length + 1;
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...todo, newEntry])
      setNewTask('');
    }
  }

  // Delete task 
  const deleteTask = (id) => {
    let newTasks = todo.filter(task => task.id !== id)
    setToDo(newTasks);
  }

  // Mark task as done or completed
  const markDone = (id) => {
    let newTask = todo.map(task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  }


  return (
    <div className="App">

      <main>
        <div className="wrapper">
          <header>Todo App</header>

          <ToDoList
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
          />

          {todo && todo.length ? '' : 'Nothing to do...'}

          <ToDoItem
            todo={todo}
            markDone={markDone}
            deleteTask={deleteTask}
          />
        </div>

      </main >
    </div>

  );
}

export default App;

