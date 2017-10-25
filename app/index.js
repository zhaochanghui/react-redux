var Redux = require('redux');
var React = require('react');
var ReactDOM = require('react-dom');

// action creator
var addTodoActions = function(text){
	return {
		type: 'add_todo',
		text: text
	};
};


// reducers
var todoReducer = function(state, action){
	
	if(typeof state === 'undefined'){
		return [];
	}
	
	switch(action.type){
		case 'add_todo':
			return state.slice(0).concat({
				text: action.text,
				completed: false
			});
			break;
		default:
			return state;
	}
};


var store = Redux.createStore(todoReducer);

class App extends React.Component{
	constructor(props) {
		super(props);
		this.handleAdd = this.handleAdd.bind(this);
		this.onChange = this.onChange.bind(this);
		this.state = {items: store.getState()};
	}

	componentDidMount(){
		var unsubscribe = store.subscribe(this.onChange);
	}

	onChange(){
		console.log(store.getState());
		// this.state = { items: store.getState() };
		this.setState({items: store.getState()});
	}

	handleAdd(){
		var input = ReactDOM.findDOMNode(this.refs.todo);
		var value = input.value.trim();

		if(value){ 
			store.dispatch(addTodoActions(value));
		}

		input.value = '';
	}


	render() {
		console.log('render');
		return (
			<div>
				<input ref="todo" type="text" placeholder="输入todo项" style={{marginRight: '10px'}} />
				<button onClick={this.handleAdd}>点击添加</button>
				<ul>
					{this.state.items.map(function(item){
						return <li>{item.text}</li>;
					})}
				</ul>
			</div>			
			);
	}
}

ReactDOM.render(
	<App />, 
	document.getElementById('root')
	);
