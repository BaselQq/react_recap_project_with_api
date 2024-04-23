import { Todos } from "../App.tsx";
import axios from "axios";
import { useEffect, useState } from "react";
import TodoCard from "./TodoCard.tsx";
import TodosNavi from "./TodosNavi.tsx";

export default function StartPage() {
    const [todos, setTodos] = useState<Todos[]>()

    function getTodos() {
        axios.get("/api/todo").then(response => setTodos(response.data))
    }

    useEffect(() => {
        getTodos()
    }, [])

    return <>
        <TodosNavi/>
        <h1>All Todos</h1>
        {todos?.map((todo) => {
            return <>
                <TodoCard id={todo.id} description={todo.description} status={todo.status}/>
            </>
        })}
    </>
}