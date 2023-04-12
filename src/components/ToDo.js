import React from 'react';

const ToDo = ({setTodos,todo,todos,text}) => {
    const deleteHandler= () =>{
        setTodos(todos.filter((el) => el.id!==todo.id))
    }
    const completeHandler = () =>{
        setTodos(todos.map((item) => {
            if(item.id===todo.id){
                return{
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        }))
    }
    return (
        <div>
            <div className='todo'>
                <li className={`todo-item ${todo.completed?"completed":''}`} >{text}</li>
                <button onClick={completeHandler} className='complete-btn'>   <i class="fa-solid fa-check"></i></button>
                <button onClick={deleteHandler} className='trash-btn'><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
    );
};

export default ToDo;