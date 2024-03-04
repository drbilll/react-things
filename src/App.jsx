
import './App.css'
import Bio from './Bio'
import Copyright from './Copyright'
import FancyText from './FancyText'
import Gallery from './Gallery'
import GetImageURL from './GetImageURL'
import InspirationGenerator from './InspirationGenerator'
import List from './List'
import PackingList from './PackingList'
import Profile1 from './Profile1'
import ToDoList from './ToDoList'
import TodoListBrace from './TodoListBrace'
import Toolbar from './Toolbar'



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

      <div>
      <Profile1 person={{
        imageId: 'lrWQx8l',
        name: 'Subrahmanyan Chandrasekhar',
      }} />
      <Profile1 person={{
        imageId: 'MK3eW3A',
        name: 'Creola Katherine Johnson',
      }} />
      </div>

      <div>
        <FancyText title text="Get Inspired App" />
        <InspirationGenerator>
          <Copyright year={2004} />
        </InspirationGenerator>
      </div>

      <div>
        <Toolbar />
      </div>      
      
    </>
  )
}

export default App
