import React,{useState, useEffect} from 'react';
import './ToDoListScreen.css'

const ToDoListScreen=()=>{
    const [todos,setTodos]=useState([]);
    const [loading, setLoading]=useState(true);
    const [error,setError]=useState('')

    useEffect(() =>{
        const fetchtodolist=async()=>{
            try{
                const response=await fetch('https://jsonplaceholder.typicode.com/todos');
                if(!response.ok){
                    throw new error("Failed to fetch To-Do list")
                }
                const data=await response.json();
                setTodos(data);
                setLoading(false);
            }catch(err){
                setError(err.message);
                setLoading(false);
            }
        };
        fetchtodolist();

    },[]);

    const handleCheckboxChange = (id) => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      };

      if (loading) {
        return (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="spinner"></div>
            <p style={{ marginLeft: '10px' }}>Loading...</p>
          </div>
        );
      }


  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

    return(
        <div>
            <h2>To-Do List</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleCheckboxChange(todo.id)}
                        />
                         <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                         {todo.title}
                         </span>
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default ToDoListScreen;
