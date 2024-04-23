import { Todos } from "../App.tsx";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import StatusSelect from "./StatusSelect.tsx";

export default function TodoCard(todo: Todos) {
    const [isEdit, setIsEdit] = useState<boolean>(true)
    const [description, setDescription] = useState<string>("")

    function handleTodoNewValues(id: string, status: string, defaultDescription: string) {
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

    function handleOnSelectChange( id: string, event: ChangeEvent<HTMLSelectElement>, defaultDescription: string) {
        handleTodoNewValues(id, event.target.value, defaultDescription)
        window.location.reload();
    }

    function handleTodoDelete(id: string) {
        axios.delete("/api/todo/" + id)
        window.location.reload();
    }

    return <>
        <div className={"todo-card"} key={todo.id}>
            <button onClick={() => handleTodoDelete(todo.id)}>X</button>
        <h2>
            {isEdit ? todo.description :
                <form>
                    <input type="text"
                        defaultValue={todo.description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <button onClick={() => handleTodoNewValues(todo.id, todo.status, todo.description)}>Submit</button>
                </form>
                }
                <div>
                    <StatusSelect status={todo.status} onChange={
                        (event) => handleOnSelectChange(todo.id, event, todo.description)
                    } />
                </div>
        </h2>
            <button onClick={handleTodoEdit}>Edit</button>
        </div>
    </>
}