import {useState} from 'react'
const Todo = (props)=>{
    const [showButtons, setShowButtons] = useState(true)
    return (
        <li className={`todo ${props.complete ? "complete":''}`}>
            <p>{props.name} id:{props.id}</p>
            <button onClick={()=>setShowButtons(!showButtons)}>toggle</button>
            {showButtons && (
             <> 
              <button onClick={()=> props.removeTodoYo(props.id)}>delete</button>
              <button onClick={()=> props.updateTodoYo(props.id)}>update</button>
            </>  
            )}
        </li>
    )
}
export default Todo