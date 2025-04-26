export type task = {
    id: string,
    title: string,
    checked: boolean,
    created_at: string
}

export type TaskProps = {
    task: task,
    onDelete: any,
    toggleComplete: any
}
