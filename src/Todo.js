const Todo = (props)=>{
    return (
        <li className={`todo ${props.complete ? "complete":''}`}>{props.name} id:{props.id}</li>
    )
}
export default Todo