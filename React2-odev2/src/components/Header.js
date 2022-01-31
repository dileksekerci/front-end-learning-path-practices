import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid';

const initialValue = { title: "", id: "", completed: false }

function Header({ todoSet, todoValues }) {

    const [form, setForm] = useState(initialValue);

    const inputChanged = (e) => {
        setForm({ ...form, title: e.target.value, id: nanoid() })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (form.title === "") {
            return false
        }

        todoSet([...todoValues, form])
        setForm(initialValue);
        console.log(form)
    }


    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={onSubmit}>
                <input
                    className="new-todo"
                    placeholder="What Needs To Be Done?"
                    autofocus
                    value={form.title}
                    onChange={inputChanged}
                />
            </form>
        </header>
    )
}

export default Header
