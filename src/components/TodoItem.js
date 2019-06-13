import React,{useState} from 'react';

const TodoItem = ({ todos, remove, edit, change }) => {
    const [text,setText] = useState('');

    return(
        todos.map( todo => {
            if(!todo.edit) return(
            <li key={todo.id}>
                {todo.text}
                <button
                    onClick={ e => {
                        e.preventDefault();
                        remove(todo.id);
                    }}
                >
                    Apagar
                </button>
                <button
                    onClick={ e => {
                        e.preventDefault();
                        edit(todo.id);
                    }}
                >
                    Editar
                </button>
            </li>
            );else return(
            <li key={todo.id}>
                <input 
                    placeholder="Altere o To Do: "
                    value={text}
                    onChange={ e => {
                        setText(e.target.value);
                    }}
                />
                <button
                    onClick={ e => {
                        e.preventDefault();
                        change(todo.id,text);
                        setText('');
                    }}
                >
                    Salvar
                </button>
            </li>
        )})
    );
};

export default TodoItem;