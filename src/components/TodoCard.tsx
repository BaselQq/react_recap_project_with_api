import { Todos } from "../App.tsx";

export default function TodoCard(todo: Todos) {
    return <>
        <div className={"todo-card"} key={todo.id}>
        <h1>{todo.status}</h1>
        <h2>
            {todo.description}
        </h2>
        </div>
    </>
}