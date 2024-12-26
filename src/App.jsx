import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShowList from './test.jsx'

function App() {
	const [count, setCount] = useState(0)
	const people = [
		{
			id: 0,
			name: 'Creola Katherine Johnson',
			profession: 'mathematician',
		}, {
			id: 1,
			name: 'Mario José Molina-Pasquel Henríquez',
			profession: 'chemist',
		}, {
			id: 2,
			name: 'Mohammad Abdus Salam',
			profession: 'physicist',
		}, {
			id: 3,
			name: 'Percy Lavon Julian',
			profession: 'chemist',  
		}, {
			id: 4,
			name: 'Subrahmanyan Chandrasekhar',
			profession: 'astrophysicist',
		}
	]
	return (
		<>
			<ShowList people={people} />
		</>
	)
}

export default App
