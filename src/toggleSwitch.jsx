import { useState } from 'react';
export default function ToggleSwitch(){
	const [buttonSwitch, setButtonSwitch] = useState(false);

	return (
		<>
		<input type="radio" onClick={() => setButtonSwitch(!buttonSwitch)} checked={buttonSwitch} style={{transform:"scale(3)"}} /> 	
		<h1>The button is {buttonSwitch ? 'checked': 'unChecked'}</h1>
		</>
	)
}
