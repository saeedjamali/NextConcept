import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function Todos() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const fetchData = async () => {

            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
                const data = await res.json();
                setTodos(data);
            } catch (error) {
                throw new Error("Connection is Lost");
                console.log(error.response);
            }
        }
        fetchData();
    }, []);

    
    
    return (
        <div>
            {

                todos.map((todo) =>
                    <div>
                        <Link href={`/todos/${todo.id}`}>
                            <h1>{todo.title}</h1>
                            <span>{todo.completed ? "Completed" : "Not Completed"}</span>
                            <hr />
                        </Link>
                    </div>
                )
            }
        </div >
    )
}

export default Todos