import { ChangeEvent } from "react"

type StatusSelectProps = {
    status:string,
    onChange:(event:ChangeEvent<HTMLSelectElement>) => void
}

export default function StatusSelect({onChange, status}: StatusSelectProps) {
    return <>
        <select onChange={onChange} value={status}>
            <option value={"OPEN"}>Open</option>
            <option value={"IN_PROGRESS"}>In Progress</option>
            <option value={"DONE"}>Done</option>
        </select>
    </>
}