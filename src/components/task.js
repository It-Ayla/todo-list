import React from "react";
import "./task.css"

export default function Task({ title, desc, funcDel, funcComp }) {
    return (
        <section className="task-body">
            <div>
                <h3 className="task-title">{title}</h3>
                <p className="task-details">{desc}</p>
            </div>
            <div>
                <button className="btn-delete"
                    onClick={funcDel} >
                    <ion-icon name="trash-outline"></ion-icon>
                </button>
                {funcComp && <button className="btn-done"
                    onClick={funcComp}>
                    <ion-icon name="checkmark-done-circle-outline"></ion-icon>
                </button>}
            </div>

        </section>
    )
}