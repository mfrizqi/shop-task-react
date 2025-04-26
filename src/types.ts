import { ChangeEventHandler, MouseEventHandler } from "react"

export type task = {
    id: string,
    title: string,
    checked: boolean
}

export type TaskProps = {
    task: task,
    isChecked: boolean,
    onCheck: ChangeEventHandler,
    onDelete: MouseEventHandler
}