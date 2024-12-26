import { useState } from 'react'

export default function SimpleForm(){
	const [form, setForm] = useState({
		firstName: 'Default First Name',
		lastName: 'Default Last Name',
		email: 'Default Email'
	})

	function handleChange(e){
		setForm({
			...form,
			[e.target.name] : e.target.value
		});
	}
	
	function formSubmit(){
		alert(
			form.firstName
		)
	}

	return (
		<>
			<h1>This is a simple form</h1>
			<form onSubmit={formSubmit}>
				<label>First Name</label>
				<input name="firstName" value={form.firstName} onChange={handleChange} />
				<label >Last Name </label>
				<input name="lastName" value={form.lastName} onChange={handleChange} />
				<label>Email </label>
				<input name="email" value={form.email} onChange={handleChange} />
				<input type="submit" value="submit" />
			</form>

		<h3>{form.firstName}</h3>
		</>
	)
}
