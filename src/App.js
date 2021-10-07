import React from 'react';
import Todo from './components/todo/todo';

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
      <>
        {todos.map(todo => {
          return (
            <Todo todo={todo}/>
          )
        })
        }
      </>
    );
}
export default App;