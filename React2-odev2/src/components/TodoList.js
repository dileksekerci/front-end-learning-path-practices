import React from 'react'

function TodoList({ todos, todoSet }) {

    const changeCompleted = (id) => {
        const filteredArray = todos.map(item => {
            if (item.id === id) {
                item.completed = !item.completed;
                return item;
            } else {
                return item;
            }
        })
        todoSet(filteredArray);
    }

    const destroy = (id) => {
        const destroyedTodos = todos.filter((item) => {
            return item.id !== id
        })
        todoSet(destroyedTodos);
    }

    return (
        <div>

            <ul class="todo-list">
                {
                    todos.map((item, index) => (
                        <li key={index} className={item.completed ? "completed" : ""}>
                            <div className="view">
                                <input
                                    className="toggle"
                                    type="checkbox"
                                    checked={item.completed}
                                    onChange={() => changeCompleted(item.id)}
                                />
                                <label >{item.title}</label>
                                <button
                                    className="destroy"
                                    onClick={() => destroy(item.id)}
                                ></button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList
