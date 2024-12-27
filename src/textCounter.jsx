import { useState } from "react";

export default function TextCounter(){

    const [letter, setLetter] = useState(0);
    const [word, setWord] = useState(0);

    function handleWordCount(e){
        // trim() removes any trailing spaces and "/\s+/" regex expression removes tabs, unnecessary spaces
        const word = e.target.value.trim().split(/\s+/);
        setWord(word.length);
    }
    
    function handleLetterCount(e){
        const letters = e.target.value.replace(/\s+/g, "").length;
        setLetter(letters)
    }
    
    return (
        <>
            <i>Letters </i> {letter} <i>Words </i> {word}
            <h1> Letter Counter</h1>
            <textarea style={{width:'300px', height:'250px'}} onChange={(e) => {
                handleWordCount(e);
                handleLetterCount(e);
            }} />
        </>
    );
}