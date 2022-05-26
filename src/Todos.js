import {useEffect, useState} from 'react'
import Todo from './Todo'

const fakeAPICallToGetTodos = (url)=>{
    const initTodos = [
        {id:1,name:'eat',complete: false},
        {id:2,name:'code',complete:true},
    ]
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // this runs after 2 seconds
            if(url === 'bad'){
                reject('404')
            }else{
                resolve({data: initTodos})
            }
        }, 2000)
    })
}


// CRUD
// Read setup initial todos state and rendering them to the UI
const Todos = ()=> {

    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    // this will run after components mounts to the dom
    useEffect(()=>{
        getTodos()
    },[])

    const getTodos = async()=>{
        try{
        //   let res = await fakeAPICallToGetTodos('bad')
          let res = await fakeAPICallToGetTodos()
          setTodos(res.data)
          setLoading(false)
        }catch(err){
           setLoading(false)
           setError(err)
        }
    }

    const renderTodos = () =>{
        if(loading)return <p>loading todos</p>
        if(error) return <p>error Occurred: {error}</p>
        return todos.map((t)=> <Todo key={t.id} id={t.id} name={t.name} complete={t.complete}/>)
    }
    return (
        <div>
            <h1>Todos</h1>
            <ul>
            {renderTodos()}
            </ul>
        </div>
    )
}

// we can only have one default export
export default Todos

// we can export as many things as we want
export const myName = 'james'
export const someFunction =()=>{alert('hello')}