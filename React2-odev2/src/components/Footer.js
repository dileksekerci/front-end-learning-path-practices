import React from 'react'

function Footer({ todoFilter, filterSet, todoSet, todos }) {

    const clearComleted = () => {
        const cleared = todos.filter(item => {
            return item.completed === false
        })
        todoSet(cleared);
    }

    return (
        <footer className="footer">

            <span className="todo-count">
                <strong>2</strong>
                items left
            </span>

            <ul className="filters">
                <li>
                    <a className={todoFilter === "all" ? "selected" : ""} onClick={() => filterSet("all")}>All</a>
                </li>
                <li>
                    <a className={todoFilter === "active" ? "selected" : ""} onClick={() => filterSet("active")}>Active</a>
                </li>
                <li>
                    <a className={todoFilter === "completed" ? "selected" : ""} onClick={() => filterSet("completed")}>Completed</a>
                </li>
            </ul>

            <button className="clear-completed" onClick={clearComleted}>
                Clear completed
            </button>
        </footer>
    )

    function newFunction() {
        return "selected"
    }
}

export default Footer
