import React from 'react';
import Button from './components/button/button';
import Todo from './components/todo/todo';
import './index.css'

function App() {

  const todos = [
    {id: 1, title: 'wash dishes', completed: true},
    {id: 2, title: 'smile', completed: false},
    {id: 3, title: 'mop the floor', completed: false},
    {id: 4, title: 'go grocery shopping', completed: false},
    {id: 5, title: 'get a haircut', completed: false},
    {id: 6, title: 'enjoy yourself', completed: false}
  ]

    return (
      <div>
        {/* <Button label="Hello" /> */}
        {todos.map(todo => {
          return (
            <Todo todo={todo}/>
          )
        })
        }

      </div>
    );
}
export default App;