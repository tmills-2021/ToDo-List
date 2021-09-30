import React from 'react';

import TodoForm from './form';
import Todo from './todo';

function App(){
  const [todos, setTodos] = React.useState([
      {
          text: 'learn react',
          isCompleted: false,
          isNew: false,
      },
      {
          text: 'meet friend for lunch',
          isCompleted: false,
          isNew: false,          
      },
      {
          text: 'build todo app',
          isCompleted: false,
          isNew: false,          
      }
  ]);

  const addTodo = text => {
      const newTodos = [...todos, {text:text, isCompleted:false, isNew: true}];
      setTodos(newTodos);
  }

  const removeTodo = index => {
      let temp = [...todos];
      temp[index].isCompleted ? temp.splice(index,1): temp[index].isCompleted = true;
      setTodos(temp);
  }
  return (<>
      <ul className="list-group">
          {todos.map((todo,i) => <Todo index={i} id={i} todo={todo} remove={removeTodo}/>)}
      </ul> 
      <TodoForm addTodo={addTodo}/>
  </>);
}

export default App;
