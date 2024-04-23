import { Todos } from "../App.tsx";
import axios from "axios";
import { useState } from "react";

export default function TodoCard(todo: Todos) {
    const [isEdit, setIsEdit] = useState<boolean>(true)
    const [description, setDescription] = useState<string>("")

    function handleTodoNewDescription(id: string, status: string, defaultDescription: string) {
        axios.put("/api/todo/" + id + "/update",
            {
                "id": id,
                "description": description == "" ? defaultDescription : description,
                "status": status
            }
        )
    }

    function handleTodoEdit() {
        setIsEdit(false)
    }

    return <>
        <div className={"todo-card"} key={todo.id}>
        <h1>{todo.status}</h1>
        <h2>
            {isEdit ? todo.description :
                <form>
                    <input type="text"
                        defaultValue={todo.description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <button onClick={() => handleTodoNewDescription(todo.id, todo.status, todo.description)}>Submit</button>
                </form>
                }
        </h2>
            <button onClick={handleTodoEdit}>Edit</button>
        </div>
    </>
}