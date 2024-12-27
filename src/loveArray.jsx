import { useState } from 'react';

const initialData = [
    {
        id: 0, 
        name: 'John', 
        Age: 23, 
    },
    {
        id: 1, 
        name: 'Mia',
        Age: 24
    },
    {
        id: 3,
        name: 'Name', 
        Age: 30
    }
]

export default function LoveArray(){

    const [myArray, setMyArray] = useState(initialData);
    const [editItem, setEditItem] = useState(null);
    const [name, setNewName] = useState('');


    const arrayItem = myArray.map(item => (
        <li key={item.id}>{item.name} <button onClick={() => handleDataEdit(item.id)}>Edit</button><button onClick={() => handleDataDelete(item.id)}>Delete</button></li>
    ))

    function handleDataEdit(id){
        const item = myArray.find(item => item.id === id );
        setEditItem(item);
        setNewName(item.name)
    }

    function handleDataDelete(id){
        setMyArray(myArray.filter(item => item.id !== id));
    }
    
    function handleFormSubmit(e){
        e.preventDefault();
        setMyArray(
            myArray.map(item => item.id === editItem.id ? { ...item, name: name }: item)
        );
        setEditItem(null);
        setNewName('');
    }

    return (
        <>
            <h3> I love working with arrays.</h3>
            {arrayItem}

            {editItem && (
                <form onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setNewName(e.target.value)}
                    />
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => setEditItem(null)}>
                        Cancel
                    </button>
                </form>
            )}
        </>
    )
}