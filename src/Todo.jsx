import { useEffect, useState } from "react"
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const Todo = () => {

    const [inputvalue, setInputvalue] = useState("");
    const [task, setTask] = useState([]);
    const [datetime, setDatetime] = useState("");

    const handleInputChange = (value) => {
        setInputvalue(value);
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (task.includes(inputvalue)) return;
        if (!inputvalue) return;
        setTask((prevTask) => [...prevTask, inputvalue])
        setInputvalue("");
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString(); //we can use similar method for time but it will not change after every second so use setInterval
            const formattedTime = now.toLocaleTimeString();
            setDatetime(`${formattedDate}-${formattedTime}`);
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    const handleDeleteTodo = (value) => {

        const updatedTask = task.filter((curTask) => curTask != value)
        setTask(updatedTask)
    }


    return (
        <section className="todo-container">
            <header>
                <h1>Todo-List</h1>
                <h2>{datetime}</h2>
            </header>
            <section className="form" >
                <form onSubmit={handleFormSubmit} >
                    <div>
                        <input type="text"
                            className="todo-input"
                            autoComplete="off"
                            onChange={(event) => handleInputChange(event.target.value)}
                            value={inputvalue} />
                    </div>
                    <div>
                        <button type="submit" className="todo-btn">Add Task</button>
                    </div>
                </form>

            </section>
            <section className="myUnorderedList" >
                <ul>
                    {
                        task.map((curTask, index) => {
                            return (
                                <li key={index} >
                                    <span>{curTask}</span>
                                    <button><FaCheck /></button>
                                    <button className="delete-btn" onClick={() => handleDeleteTodo(curTask)}><MdDelete /></button>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </section>
    )
}