import React from 'react'
import TodoList from './TodoList'
import Footer from './Footer'

function Content({ todoList, todoFilter, filterSet, todoSet }) {
    return (
        <>
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <TodoList todos={todoList} todoSet={todoSet} />
            </section>
            <Footer todoFilter={todoFilter} filterSet={filterSet} todos={todoList} todoSet={todoSet} />
        </>
    )
}

export default Content
