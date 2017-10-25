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