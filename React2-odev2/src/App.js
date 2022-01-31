import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import { useState, useEffect } from "react"

function App() {

  const [todos, setTodos] = useState([
    {
      title: "deneme",
      id: "123",
      completed: false,
    },
    {
      title: "deneme 1",
      id: "1234",
      completed: true,
    }
  ])

  const [filter, setFilter] = useState("all");

  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (filter === "all") {
      setFilteredList(todos);
    } else if (filter === "active") {
      const newFiltered = todos.filter((item => {
        return item.completed === false
      }))
      setFilteredList(newFiltered);
    } else if (filter === "completed") {
      const newFiltered = todos.filter((item => {
        return item.completed === true
      }))
      setFilteredList(newFiltered);
    }
  }, [filter])


  return (
    <>
      <section className="todoapp" >
        <Header todoSet={setTodos} todoValues={todos} />
        <Content todoList={filteredList} todoSet={setTodos} todoFilter={filter} filterSet={setFilter} />
      </section>
    </>
  );
}

export default App;
