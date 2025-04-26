import { FormEvent, useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import { v4 as uuidv4 } from 'uuid';

type task = {
    id: string,
    title: string,
    checked: boolean
}

const TaskManager = () => {

    const [taskList, setTaskList] = useState<task[]>([
        {
            id: '647bf992-1698-488c-973a-d348caa542d2',
            title: 'Fry the egg',
            checked: true
        },
        {
            id: '7b5a7559-4462-4dfa-96cc-45928e8a5c26',
            title: 'Meetup friends',
            checked: false
        },
        {
            id: '06582072-b649-4b9b-8914-c86a9830d18f',
            title: 'Lawn the yard',
            checked: false
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
            const newTask: task = {
                id: uuidv4(),
                title: task,
                checked: false
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
            <section className="flex flex-col items-center justify-start py-16 px-10 h-full">
                <div className="w-full max-w-[560px]">
                    <h1 className="text-4xl font-bold mb-2 text-neutral-700">Task Manager</h1>
                    <p className="mb-10 text-neutral-400">Stay organized. Get things done.</p>
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
                    <div className="flex flex-col gap-4 w-full max-w-[560px] max-h-[100%] overflow-y-auto">
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