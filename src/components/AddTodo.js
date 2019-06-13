import React,{useState} from 'react';

const AddTodo = ({ create }) => {
    const [text, setText] = useState('');

    return (
        <div>
            <input 
                placeholder="Escreva um novo To Do: "
                value={text}
                onChange={ e => {
                    setText(e.target.value);
                }}
            />
            <button
                onClick={ e => {
                    e.preventDefault();
                    create(text);
                    setText('');
                }}
            >Criar</button>
        </div>
    );
};

export default AddTodo;