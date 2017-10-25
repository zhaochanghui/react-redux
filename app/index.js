import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { connect, Provider } from 'react-redux';

//http://blog.csdn.net/q1056843325/article/details/54880804

class Counter extends Component{
	render() {
		const { value,reducerHandler, addHandler } = this.props;
		return (
			<div>
				<p>{value} </p>
				<button onClick={reducerHandler}>-</button>
				<button onClick={addHandler}>+</button>
			</div>
			);
	}
}


const mapStateToProps = (state)=>{
	return {
		value: state.cnt
	}
}

const mapDispatchToProps = (dispatch)=>{
	return{
		reducerHandler: ()=>{
			dispatch({type:'REDUCE'});
		},
		addHandler: ()=>{
			dispatch({type:'ADD'});
		}
	}
}

const APP = connect(mapStateToProps,mapDispatchToProps)(Counter);

const reducer = (state={cnt:0},action)=>{
	switch(action.type){
		case 'ADD':
			return {cnt: state.cnt+1};
		case 'REDUCE':
			return {cnt: state.cnt-1};
		default:
			return state;		
	}
}

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<APP />
	</Provider>,
	document.getElementById('root')
	);