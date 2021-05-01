import React,{useState,useEffect} from 'react'
import { Button,FormControl,Input,InputLabel } from '@material-ui/core';
import Todo from './Todo'
import db from './firebase';

function App() {
    const [todos,setTodos]=useState([]);
    const [input,setInput]=useState('');

    //when the app loads,we need to listen to the database and fetch new todos as they get added/removed

    useEffect(()=>{
        db.collection('todos').onSnapshot(snapshot=>{
            setTodos(snapshot.docs.map(docs=>docs.data().todo))
        })
    },[]);
    const addTodo = (event)=>{
        event.preventDefault(); //will stop refreshing
        setTodos([...todos,input]);
        setInput(''); //clear up inputs
    }
    return (
        <div className="App">
            <h1>Todo-list</h1>
            <form>
            <FormControl>
                <InputLabel> 😸 write a todos</InputLabel>
                <Input value={input} onChange={event =>setInput(event.target.value)}/>                                         
            </FormControl>

                <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
                Add Todo
                </Button>
                
            </form>
            <ul>
               {todos.map(todo =>(
                  <Todo text={todo}/>
               ))}
            </ul>
        </div>
    )
}

export default App
