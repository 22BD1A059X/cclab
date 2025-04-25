import { useState } from 'react';

export default function TodoListPlanner() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ 
        textAlign: 'center', 
        color: '#333', 
        fontSize: '28px',
        marginBottom: '20px',
        marginTop: '20px'
      }}>
        To-Do List Planner
      </h1>
      
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a new task..."
          style={{ 
            flexGrow: 1, 
            padding: '8px 12px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px 0 0 4px',
            outline: 'none'
          }}
        />
        <button
          onClick={addTask}
          style={{ 
            padding: '8px 16px',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderLeft: 'none',
            borderRadius: '0 4px 4px 0',
            cursor: 'pointer'
          }}
        >
          Add
        </button>
      </div>

      {tasks.length === 0 ? (
        <div style={{ 
          borderTop: '1px solid #eee',
          borderBottom: '1px solid #eee',
          padding: '15px 0',
          textAlign: 'center'
        }}>
          <div style={{ color: '#666' }}>No tasks yet</div>
          <div style={{ color: '#007bff', marginTop: '5px' }}>Add a task to get started!</div>
        </div>
      ) : (
        <ul style={{ 
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          {tasks.map((task) => (
            <li 
              key={task.id} 
              style={{ 
                padding: '10px 0',
                borderBottom: '1px solid #eee',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input 
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                  style={{ marginRight: '10px' }}
                />
                <span style={{ 
                  textDecoration: task.completed ? 'line-through' : 'none',
                  color: task.completed ? '#999' : '#333'
                }}>
                  {task.text}
                </span>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                style={{ 
                  background: 'none',
                  border: 'none',
                  color: '#dc3545',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      
      {tasks.length > 0 && (
        <div style={{ 
          marginTop: '15px',
          textAlign: 'center',
          fontSize: '14px',
          color: '#666'
        }}>
          {tasks.filter(t => t.completed).length} of {tasks.length} tasks completed
        </div>
      )}
    </div>
  );
}