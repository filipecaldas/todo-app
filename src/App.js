import React,{useState} from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

const App = () => {
const [todos, setTodos] = useState([

  ]);

  const create = (text) => {
    setTodos(prevTodos => [...prevTodos,{id:todos.length+1, text:text, edit:false}])
  };

  const remove = (id) => {
    setTodos(prevTodos => prevTodos.filter( todo => {
      if(todo.id === id) return !todo;
      return todo;
    }))
  };

  const edit = id => {
    setTodos(prevTodos => prevTodos.map(todo => {
      if(todo.id === id) return {id:todo.id, text:todo.text, edit:true};
      return todo;
    }));
  }

  const change = (id, text) => {
    setTodos(prevTodos => prevTodos.map(todo => {
      if(todo.id === id) return {id:todo.id, text:text, edit:false};
      return todo;
    }));
  }

  return (
    <div className="App">
      <AddTodo 
        create={create}
      />
      <ul>
        <TodoItem 
          todos={todos}
          remove={remove} 
          edit={edit}
          change={change}
        />
      </ul>
    </div>
  );
}

export default App;
