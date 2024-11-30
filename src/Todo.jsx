import { useState } from "react"
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const Todo = () => {

    const [inputvalue, setInputvalue] = useState("");
    const [task, setTask] = useState([]);

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


    return (
        <section className="todo-container">
            <header>
                <h1>Todo-List</h1>
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
                        task.map((curTask,index)=>{
                          return(
                            <li key={index} >
                                <span>{curTask}</span>
                                <button><FaCheck /></button>
                                <button><MdDelete /></button>
                            </li>
                          )
                        })
                    }
                  </ul>
            </section>
        </section>
    )
}