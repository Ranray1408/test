import React from 'react';

class ClassCounter extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			count : 0
		}

		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}

	increment() {
		this.setState({count : ++this.state.count});
	}

	decrement() {
		this.setState({count : --this.state.count });
	}

	render() {
		return (
			<div>
				<h1>class count</h1>
				<h1>{ this.state.count }</h1>
				<button onClick={this.increment}>increment</button>
				<button onClick={this.decrement}>decrement</button>
			</div>
		);
	}
}

export default ClassCounter;
