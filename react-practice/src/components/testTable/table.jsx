import React, { useState } from 'react'

function table() {
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);

    const addTask = () => {
        if (task.trim() === '') return;
        setTodos([...todos, { id: Date.now(), text: task }]);
        setTask('');

    };
    const deleteTask = (idX) => {

        setTodos(todos.filter((todos) => todos.id !== idX));
    }
    return (
        <div>
            <label htmlFor="task">Task:-</label>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={addTask}>Add</button>
            <ul>
                {
                    todos.map((t) => (
                        <li key={t.id}>
                            {t.text}
                            <button onClick={() => deleteTask(t.id)}>X</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default table
