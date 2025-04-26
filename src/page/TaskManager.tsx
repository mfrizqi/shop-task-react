import { FormEvent, useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import { v4 as uuidv4 } from 'uuid';
import { task } from "../types";

const TaskManager = () => {

    const [taskList, setTaskList] = useState<task[]>([
        {
            id: uuidv4(),
            title: 'Fry the egg',
            checked: false,
            created_at: new Date().toLocaleString()
        },
        {
            id: uuidv4(),
            title: 'Meetup friends',
            checked: false,
            created_at: new Date().toLocaleString()
        },
        {
            id: uuidv4(),
            title: 'Lawn the yard',
            checked: false,
            created_at: new Date().toLocaleString()
        },
    ])
    const [task, setTask] = useState("")

    const toggleComplete = (id: string) => {
        setTaskList(taskList.map((task: any) => {
            if (task.id === id) {
                return { ...task, checked: !task.checked };
            } else {
                return task;
            }
        }));
    }

    const deleteHandler = (id: string) => {
        setTaskList(taskList.filter(task => task.id !== id));
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        if (task.length > 0) {
            const now = new Date().toLocaleString()
            const newTask: task = {
                id: uuidv4(),
                title: task,
                checked: false,
                created_at: now
            }
            setTaskList([...taskList, newTask])
            setTask("")
        }
    }

    useEffect(() => {
        console.log(taskList)
    },
        [taskList])

    return (
        <section className="bg-white h-svh w-full">
            <section className="flex flex-col items-center justify-start pt-20 px-10 h-full">
                <div className="w-full max-w-[560px]">
                    <h1 className="text-3xl font-bold mb-2 text-neutral-700">Task Manager</h1>
                    <p className="mb-6 text-neutral-400">Stay organized. Get things done.</p>
                    <form onSubmit={(e) => { handleSubmit(e) }} className="mb-10">
                        <div className="flex flex-col md:flex-row justify-center">
                            <input
                                type="text"
                                name="todo-input"
                                id="task_input"
                                placeholder="Enter your task"
                                className="text-zinc-700 text-2xl lg:text-4xl font-semibold border-b border-slate-500 mr-2 py-3 px-4 w-full leading-1 focus:outline-none focus:border-teal-500 hover:border-teal-500 transition-all placeholder:text-neutral-400/50"
                                onChange={(e) => setTask(e.target.value)}
                                value={task}
                            />
                        </div>
                        <div className="text-sm text-end text-neutral-500/50 mt-4">
                            Press <kbd>enter</kbd> or click
                            <button
                                className="px-6 py-1.5 ml-1.5 bg-teal-600 hover:shadow-md shadow-teal-600/50 rounded text-white cursor-pointer transition-all"
                                type="submit"
                            >
                                Add
                            </button>
                        </div>
                    </form>
                </div >

                {taskList.length > 0 &&
                    <div className="flex flex-col gap-4 w-full max-w-[560px] max-h-[100%] overflow-y-auto py-6">
                        {taskList.map((task) => {
                            return <TaskCard
                                task={task}
                                toggleComplete={toggleComplete}
                                onDelete={deleteHandler}
                                key={task.id}>
                            </TaskCard>
                        })}
                    </div>
                }
                {taskList.length === 0 &&
                    <div className="flex flex-col gap-4 w-full max-w-[560px] max-h-[100%]">
                        <div className="text-center p-4 bg-slate-100 rounded text-slate-500">All tasks done!</div>
                    </div>
                }
            </section>
        </section >
    )
}

export default TaskManager;