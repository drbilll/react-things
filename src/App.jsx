
import './App.css'
import Bio from './Bio'
import Copyright from './Copyright'
import Counter from './Counter'
import Counter1 from './Counter1'
import FancyText from './FancyText'
import Form from './Form'
import Gallery from './Gallery'
import Gallery1 from './Gallery1'
import Gallery2 from './Gallery2'
import GetImageURL from './GetImageURL'
import InspirationGenerator from './InspirationGenerator'
import List from './List'
import List1 from './List1'
import PackingList from './PackingList'
import Profile1 from './Profile1'
import ToDoList from './ToDoList'
import TodoListBrace from './TodoListBrace'
import Toolbar from './Toolbar'



function App() {
  return (
    <> 
      <div>
        <br/><h2>Branch 2</h2>
        <Gallery />
      </div>

      <div>
        <br/><h2>Branch 3</h2>
        <ToDoList />
        <Bio />
      </div>

      <div>
        <br/><h2>Branch 4</h2>
        <TodoListBrace />
      </div>

      <div>
        <br/><h2>Branch 5</h2>
         <GetImageURL imageId='https://i.imgur.com/YfeOqp2s.jpg' />
      </div>

      <div>
        <br/><h2>Branch 6</h2>
        <PackingList />
      </div>

      <div>
        <br/><h2>Branch 7</h2>
        <List />
      </div>

      <div>
        <br/><h2>Branch 8</h2>
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
        <br/><h2>Branch 9</h2>
        <FancyText title text="Get Inspired App" />
        <InspirationGenerator>
          <Copyright year={2004} />
        </InspirationGenerator>
      </div>

      <div>
        <br/><h2>Branch 10</h2>
        <Toolbar />
      </div>      

      <div>
        <br/><h2>Branch 11</h2>
        <Gallery1 />
      </div>

      <div>
        <br/><h2>Branch 12</h2>
        <Gallery2 />
      </div>

      <div>
        <br/><h2>Branch 13</h2>
        <Counter />
      </div>

      <div>
        <br/><h2>Branch 14</h2>
        <Counter1 />
      </div>
      
      <div>
        <br/><h2>Branch-- 15</h2>
        <Form />
      </div>

      <div>
        <br/><h2>Branch 16</h2>
        <List1 />
      </div>

    </>
  )
}

export default App
