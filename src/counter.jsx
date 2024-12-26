import { useState } from 'react'
export default function Counter(){
	const [count, setCount] = useState(0);
	return (
		<>
		<h1>{count}</h1>
		<input type="button" value="Click" onClick={() => {
			setCount(count + 1);
			setCount(i => i + 1);
		}}/>
		</>
	);
}
