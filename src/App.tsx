import './App.css'
import { Route, Routes } from "react-router-dom";
import StartPage from "./components/StartPage.tsx";
import OpenTodos from "./components/OpenTodos.tsx";
import InProgressTodos from "./components/InProgressTodos.tsx";
import DoneTodos from "./components/DoneTodos.tsx";

export type Todos = {
    id: string,
    description: string,
    status: string
}

function App() {

  return (
    <>
        <Routes>
            <Route path={"/"} element={<StartPage/>}/>
            <Route path={"/todo/open"} element={<OpenTodos/>}/>
            <Route path={"/todo/inprog"} element={<InProgressTodos/>}/>
            <Route path={"/todo/done"} element={<DoneTodos/>}/>
        </Routes>
    </>
  )
}

export default App
