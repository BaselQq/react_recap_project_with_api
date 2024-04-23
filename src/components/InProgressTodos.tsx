import { Todos } from "../App.tsx";
import { useEffect, useState } from "react";
import axios from "axios";
import TodoCard from "./TodoCard.tsx";
import TodosNavi from "./TodosNavi.tsx";

export default function OpenTodos() {
    const [openTodos, setOpenTodos] = useState<Todos[]>()

    useEffect(() => {
        axios.get("/api/todo").then(response =>
            setOpenTodos(response.data)
        )
    }, [])

    return <>
        <TodosNavi/>
        <h1>In Progress</h1>
        {openTodos?.filter((todo) => (
            todo.status == "IN_PROGRESS"
        )).map((todo) => {
            return <TodoCard id={todo.id} description={todo.description} status={todo.status}/>
        })}

    </>
}