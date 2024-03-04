
import './App.css'
import Bio from './Bio'
import Gallery from './Gallery'
import GetImageURL from './GetImageURL'
import List from './List'
import PackingList from './PackingList'
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

      <div>
         <GetImageURL imageId='https://i.imgur.com/YfeOqp2s.jpg' />
      </div>

      <div>
        <PackingList />
      </div>

      <div>
        <List />
      </div>
      
    </>
  )
}

export default App
