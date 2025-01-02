import { useState } from 'react';

export default function Todo() {
	const mytask = {
		id: 1,
		title: "GET SOME LIFE",
		edit: true
	};

	const [task, setTask] = useState([mytask]);
	const [newTask, setNewTask] = useState({
		title: ''
	}); 


	function duplicateMyTask() {
		setTask((prevData) => [
			...prevData, // Keep all previous tasks
			{ ...mytask, id: prevData.length + 1 } // Add a new task with a unique ID
		]);
	}
	function handleAddNewTask(e){
		e.preventDefault();
		setTask((prevTask) => [
			...prevTask,
			{ id: prevTask.length + 1 ,title: e.target.title.value, edit:true}
		])
	}
	function handleEditTask(id){
		task.map((t) => {
			if (t.id === id){
				setTask([
					{id: id, title: t.title, edit: !t.edit}
				])
			}
		})
	}
	return (
		<>
		<h1>A simple todo in react</h1>
		<button onClick={duplicateMyTask}>Add same task</button>

		<button>Add new task </button>
		{task.map((t) => (
			<div style={{display:'flex', flexDirection:'row'}} key= {t.id}>
			<p key={t.id}>{t.title}<button onClick = {() => setTask((prevTasks) => prevTasks.filter((task) => task.id !== t.id))
			}>Delete</button></p>
			<input hidden = {t.edit} value ={t.title} />
			<button onClick = {() => handleEditTask(t.id)}>{t.edit ? 'edit' : 'save'}</button>
			</div>
		))}

		<form hidden = {false} onSubmit = {handleAddNewTask}>
		<label id="title">Title </label>
		<input name="title" type="text" value={newTask.title} onChange = { (e) => setNewTask({title: e.target.value})}/>
		<button type="submit" >Add</button>
		</form>
		</>
	);
}
