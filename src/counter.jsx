// writing multiple counter that updates on it's own

import { useState } from 'react'

let initialCounters = [
	0, 0 , 0
]

export default function Counter(){

	const [counters, setCounters] = useState(
		initialCounters
	);

	function handleResetClick(){
		setCounters(initialCounters);
	}

	function handleIncrementClick(index){
		const nextCounters = counters.map((c, i) => {
			if (index == i){
				return c + 1;
			}else{
				return c;
			}
		});
		setCounters(nextCounters);
	};

	return (
		<>
		
		<h1 onClick={handleResetClick}>Reset Count</h1>

		<ul>
			{counters.map((counter , index)=> (
				<li key={index}>
					{counter + "   "}
					<button onClick={() => {
						handleIncrementClick(index);
					}}>Increment</button>
				</li>
			))}
		</ul>
		</>
	);
}
