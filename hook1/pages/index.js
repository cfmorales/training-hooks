import React, {useState} from 'react';

const InputElement = () => {
    const [inputText, setInputText] = useState('');
    const [history, setHistory] = useState([]);
    return (
        <>
            <input onChange={e => {
                setInputText(e.target.value)
                setHistory([...history,e.target.value])
            }}
                   placeholder="Enter some text"/>
            <br/>
            {inputText}
            <br/>
            <ul>
                {history.map((val)=>(<div>{val}</div>))}
            </ul>
        </>);
}

export default InputElement;