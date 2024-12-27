import { useState } from 'react';

export default function DisplayArray(){
    const [newItem, setNewItem] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const [itemID, setItemID] = useState(0);
    const [ userArray, setUserArray ] = useState([]);

    // function handleToggleComplete(e){
    //     setUserArray[{
    //         ...userArray,
    //         completed:e.target.value
    //     }]
    // }
    
    function hanldeOnSubmit(e){
        e.preventDefault();
        const input = e.target.inputArray.value;
        const array = input.split(",").map((name, index) => ({
            id: index + 1,
            name:name,
            completed: false
        }));
        setUserArray(array);
        setIsVisible(!isVisible);
    }

    function handleToggleComplete(id){
        setUserArray(userArray.map(item => item.id === id ? {...item, completed: !item.completed}: item))
    };
    
    return (
      <>
        <h3>Enter the array</h3>
        <form onSubmit={hanldeOnSubmit} hidden={isVisible}>
          <input type="text" name="inputArray" />
          <button name="submit">Submit</button>
        </form>

        <input
          type="text"
          name="addItem"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button
          name="Add"
          onClick={() => {
            setUserArray([...userArray, newItem]);
          }}
        >
          Add
        </button>
        {userArray.map((item) => (
          <li key={item.id} style={{ listStyle: "none" }}>
            {item.name}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setUserArray(userArray.filter((a) => a !== item));
              }}
            >
              Delete
            </button>
            <input
              type="radio"
              value={item.completed}
              onChange={() => handleToggleComplete(item.id)}
            />
          </li>
        ))}
      </>
    );
}