export default function ShowList({people}){
	const listItem = people.map(person => 
		<li key={person.id} >{person.name}</li>
	);
	const chemisPeople = people.filter(person => 
		person.profession === 'chemist'
	);
	return (<>
		{listItem}
		</>)
}
