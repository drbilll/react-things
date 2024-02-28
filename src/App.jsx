
import './App.css'
import Bio from './Bio'
import Gallery from './Gallery'
import ToDoList from './ToDoList'
import TodoListBrace from './TodoListBrace'



function App() {
  return (
    <>
      <div>
        <Gallery />
      </div>

      <div>
        <ToDoList />
        <Bio />
      </div>

      <div>
        <TodoListBrace />
      </div>
      
    </>
  )
}

export default App
