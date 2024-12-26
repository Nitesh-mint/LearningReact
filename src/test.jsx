export default function ShowList({people}){
	const listItem = people.map(person => 
		<li>{person.name}</li>
	);
	const chemisPeople = people.filter(person => 
		person.profession === 'chemist'
	);
	return (<>
			{chemisPeople.map(person =>
			<li>{person.name}</li>
			)}	
		</>)
}
