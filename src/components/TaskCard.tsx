import Checkbox from "./Checkbox";
import { task } from "../types";
import delete_bin from '../assets/icon/bin-2.svg'

type TaskProps = {
    task: task,
    onDelete: any,
    toggleComplete: any
}

const TaskCard = ({ task, toggleComplete, onDelete }: TaskProps) => {

    const handleCheck = () => {
        toggleComplete(task.id)
    }

    return (
        <div className="p-3 bg-slate-100 border border-slate-200 flex items-center justify-between w-full rounded">
            <div className="flex">
                <Checkbox onChange={handleCheck} checked={task.checked} />
                <div className={`line-clamp-2 ${task.checked ? 'opacity-30' : ''}`}>
                    {task.title}
                </div>
            </div>
            <div className="p-2 rounded">
                <img onClick={() => { onDelete(task.id) }} className="cursor-pointer opacity-70" src={delete_bin} width={20} height={20} />
            </div>
        </div>
    )
}

export default TaskCard;