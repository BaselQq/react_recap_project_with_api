import { Link } from "react-router-dom";

export default function TodosNavi() {
    return <>
        <ul>
            <Link to={"/"}>Home</Link>|
            <Link to={"/todo/open"}>Open</Link>|
            <Link to={"/todo/inprog"}>In Progress</Link>|
            <Link to={"/todo/done"}>Done</Link>
        </ul>
    </>
}