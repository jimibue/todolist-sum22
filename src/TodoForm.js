import { useState } from "react"

const TodoForm = (props)=>{
    const [name, setName] = useState('')
    const [id, setID] = useState('')
    const handleSubmit = (event)=> {
        // prevents page from reloading
        event.preventDefault()
        let newTodo = {name:name, id:id, complete:false}
        // add this newTodo to my todos state in my Todos component
        props.addTodoYo(newTodo)
        setName('')
        setID('')
    }
    return (
        <form className='todo-form'onSubmit={handleSubmit}>
            <p>todo name:</p>
            <input value={name} onChange={(e)=> setName(e.target.value)}/>
            <p>id</p>
            <input value={id} onChange={(e)=> setID(e.target.value)}/>
            <button type='submit'>add</button>
        </form>
    )
}

export default TodoForm