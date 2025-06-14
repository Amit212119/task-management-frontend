import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');
  const [editTaskId, setEditTaskId] = useState(null); // ✅ Track editing

  const fetchTasks = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACK_API_URL}/task`,
        {
          withCredentials: true,
        }
      );
      setTasks(res.data);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const editTask = (task) => {
    setEditTaskId(task._id);
    setTitle(task.title);
    setDesc(task.description || '');
  };

  const addOrUpdateTask = async (e) => {
    e.preventDefault();

    if (editTaskId) {
      // 🔁 Update Task
      try {
        await axios.put(
          `${import.meta.env.VITE_BACK_API_URL}/task/${editTaskId}`,
          { title, description },
          { withCredentials: true }
        );
        toast.success('Task updated!');
        setEditTaskId(null);
        setTitle('');
        setDesc('');
        fetchTasks();
      } catch (err) {
        toast.error('Error updating task', err);
      }
    } else {
      // ➕ Add Task
      try {
        await axios.post(
          `${import.meta.env.VITE_BACK_API_URL}/task`,
          { title, description },
          { withCredentials: true }
        );
        setTitle('');
        setDesc('');
        toast.success('Task added!');
        fetchTasks();
      } catch (err) {
        toast.error('Error adding task', err);
      }
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACK_API_URL}/task/${id}`, {
        withCredentials: true,
      });
      toast.success('Task deleted!');
      fetchTasks();
    } catch (err) {
      console.log(err);
      toast.error('Error deleting task');
    }
  };

  const toggleComplete = async (id, completed) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_BACK_API_URL}/task/${id}`,
        { completed: !completed },
        { withCredentials: true }
      );
      fetchTasks();
    } catch (err) {
      toast.error('Failed to update task', err);
    }
  };

  return (
    <>
      <div className="taskContainer">
        <form onSubmit={addOrUpdateTask} className="taskForm">
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            placeholder="Description"
            value={description}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button type="submit">
            {editTaskId ? 'Update Task' : 'Add Task'}
          </button>
        </form>

        <ul className="taskList">
          {tasks.map((task) => (
            <li
              key={task._id}
              className={`taskItem ${task.completed ? 'completed' : ''}`}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task._id, task.completed)}
                className="taskCheckbox"
              />

              <span>
                <span className="title">{task.title}</span> - {task.description}
              </span>

              <div>
                <button onClick={() => editTask(task)} className='editButton'> Edit</button>
                <button onClick={() => deleteTask(task._id)} className='deleteButton'> Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <ToastContainer />
    </>
  );
};

export default Task;
