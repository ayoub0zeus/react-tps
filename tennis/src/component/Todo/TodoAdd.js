import Navbar from "../Navbar/Navbar";
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from '../../redux/actions';

function TodoAdd () {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const [article, setArticle] = useState({});

    const handleArticleData = (e) => {
        setArticle({
            ...article,
            [e.target.id]: e.target.value,
        });
    };
    
    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo(article));
    };
    const handleRemoveTodo = (id) => {
        dispatch(removeTodo(id));
    };

    return (
        <div>
            <Navbar />
            <form className="add-article">

                <input
                    type="text"
                    id="text"
                    placeholder="text"
                    onChange={handleArticleData}
                />

                <button onClick={handleAddTodo}>Add article</button>
            </form>

            <div>
                <h2>Todos</h2>
                <ul>
                    {todos.map(todo => (
                        <li key={todo.id}>
                            {todo.text}
                            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                        </li>

                    ))}
                </ul>


            </div>
        </div>
    );
};

export default TodoAdd;
