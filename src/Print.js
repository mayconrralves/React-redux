import React,{useState} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';


export  function Print({todos}){
    console.log('Print')
    return (
        <ul>
            {todos}
            {
                
            	todos.map(
            		(value,index)=> (<li onClick={()=> alert(value)}key={index}>
            							{value}
            						</li>
            		)
            	)
            }
        </ul>
    )
}
const mapsStateToProps = state =>(
    {
        todos: state.toDo
    }
)
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
export default connect(mapsStateToProps)(Print)