import React, { useState } from 'react';


const Counter = () => {
	const [like, state] = useState(0);

	return (
		<div>
			<h1>{ like }</h1>
			<button onClick={() => { state(like + 1)}}>increment</button>
			<button onClick={() => { state(like - 1)}}>decrement</button>
		</div>
	);
}
export default Counter;
