import React,{useState} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';



export  function Main({todos, addTodo}){
    console.log('Main')
    const [input, setInput] = useState('');
    const handleSubmit = (event) => {
        addTodo(input)  
        setInput('')
    }
    
    const handleChange = (event)=>{
        setInput(event.target.value)
        //addTodo(input)

    }
    
    return (
        <div>
            <input type='text' value={input} onChange={handleChange} placeholder="Digite seu texto" />
            <button onClick={handleSubmit}>Enviar</button>
            <ul>
            {
            	todos.map(
            		(value,index)=> (<li onClick={()=> alert(value)}key={index}>
            							{value}
            						</li>
            		)
            	)
            }
        </ul>
        </div> 
    )
    
   
}

const mapsStateToProps = state =>(
    {
        todos: state.toDo
    }
)

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);



export default connect(mapsStateToProps, mapDispatchToProps)(Main);