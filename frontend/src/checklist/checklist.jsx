import React, { useState } from 'react';
import './checklist.css';

const Checklist = () => {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim() && dueDate) {
            const newTask = { name: taskName.trim(), dueDate, completed: false };
            setTasks([...tasks, newTask]);
            setTaskName('');
            setDueDate('');
        }
    };

    const completeTask = (index) => {
        const updatedTasks = tasks.map((task, i) => 
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const removeTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="body">
            <header>
                <h1>Checklist & Timeline</h1>
                <nav>
                    <ul>
                        <li><a href="/Login">Home</a></li>
                        <li><a href="/guestlist">Guest List</a></li>
                        <li><a href="/budget">Budget Calculator</a></li>
                        <li><a href="/vendors">Vendor Directory</a></li>
                        <li><a href="/inspiration">Inspiration Board</a></li>
                        <li><a href="/seating">Seating Chart</a></li>
                        <li><a href="/blogs">Blogs/Resources</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <h2>Add Your Tasks</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="taskName">Task Name:</label>
                        <input 
                            type="text" 
                            id="taskName" 
                            value={taskName} 
                            onChange={(e) => setTaskName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dueDate">Due Date:</label>
                        <input 
                            type="date" 
                            id="dueDate" 
                            value={dueDate} 
                            onChange={(e) => setDueDate(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Task</button>
                </form>

                <div id="checklist">
                    <h2>Your Checklist</h2>
                    <ul className="list-group">
                        {tasks.map((task, index) => (
                            <li key={index} className="list-group-item">
                                <span>
                                    {task.name} (Due: {new Date(task.dueDate).toLocaleDateString()})
                                </span>
                                <div>
                                    <button 
                                        className="btn btn-success btn-sm" 
                                        onClick={() => completeTask(index)}
                                    >
                                        {task.completed ? 'Undo' : 'Complete'}
                                    </button>
                                    <button 
                                        className="btn btn-danger btn-sm" 
                                        onClick={() => removeTask(index)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>

            <footer>
                <p>&copy; 2024 Wedding Planner</p>
            </footer>
        </div>
    );
};

export default Checklist;
