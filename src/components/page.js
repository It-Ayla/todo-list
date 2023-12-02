/* eslint-disable */
import React from "react"
import { useState } from "react"
import Task from "./task"
import "./page.css"

export default function Page() {

    const [show, setShow] = useState(true)
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [tasks, setTasks] = useState([])
    const [compTasks, setCompTasks] = useState([])

    function handleAdd(e) {
        e.preventDefault()
        const newTask = { id: tasks.at(-1) !== undefined ? tasks.at(-1).id + 1 : 0, title: title, desc: desc }
        setTasks([...tasks, newTask])
        setTitle("")
        setDesc("")
    }

    function handleDelete(id) {
        const newTasks = [];

        tasks.map((task) => {
            if (task.id !== id)
                newTasks.push(task)
        })
        setTasks(newTasks)
    }
    function handleDeleteComp(id) {
        const newTasks = [];

        compTasks.map((task) => {
            if (task.id !== id)
                newTasks.push(task)
        })
        setCompTasks(newTasks)
    }

    function handleComp(id) {
        const compTask = tasks.find(task => task.id === id)
        handleDelete(id)
        const tmpCompTasks = [compTask, ...compTasks]
        setCompTasks(tmpCompTasks)
    }

    function handleChange(event, func) {
        func(event.target.value)
    }

    const tasksUI = tasks.length ?
        tasks.map((task) => {
            return <li><Task
                key={task.id}
                title={task.title}
                desc={task.desc}
                funcDel={() => handleDelete(task.id)}
                funcComp={() => handleComp(task.id)}
            />
            </li>
        }) : <li className="empty-list">New tasks will be here..</li>

    const completedUI = compTasks.length ?
        compTasks.map((task) => {
            return <li><Task
                key={task.id}
                title={task.title}
                desc={task.desc}
                funcDel={() => handleDeleteComp(task.id)}
                funcComp={undefined}
            />
            </li>
        }) : <li className="empty-list">Completed tasks will be here..</li>

    return (
        < div className="page-container" >
            <h1>My Todos</h1>
            <form className="page-form grid-layout" onSubmit={handleAdd}>
                <label htmlFor="task-title">Title</label>
                <label htmlFor="task-detail">Description</label>
                <label></label>
                <input type="text"
                    id="task-title"
                    name="task-title"
                    placeholder="Title of your To Do..."
                    value={title}
                    onChange={() => handleChange(event, setTitle)}
                />
                <input
                    type="text"
                    id="task-detail"
                    name="task-detail"
                    placeholder="Description of your To Do..."
                    value={desc}
                    onChange={() => handleChange(event, setDesc)}
                />
                <button className="btn" type="submit">Add</button>
            </form>
            <hr />
            <section className="task-filters grid-layout">
                <div>
                    <button className={`btn ${show && 'active-btn'}`} onClick={() => setShow(true)}>To Do</button>
                    <button className={`btn ${!show && 'active-btn'}`} onClick={() => setShow(false)}>completed</button>
                </div>
            </section>
            <ul className="task-list grid-layout">
                {show ? tasksUI : completedUI}
            </ul>
        </div >
    )
}