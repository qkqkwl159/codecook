import React ,{ useRef, useState }from 'react';
import './TodoForm.css';


function TodoForm({onAdd}) {
    const textRef = useRef('')
    const [text, setText] = useState('')
    const changeInput = (e)=>{
        const {value} = e.target
        setText(value)
    }

    const onSubmit=(e) =>{
        e.preventDefault()

        if(!text) return
        onAdd(text)
        setText('')
        textRef.current.focus()
    }

    return (
        <form className='TodoFrom' onSubmit={onSubmit}>
            <input type="text" value={text} onChange={changeInput} ref={textRef}/>
            <button type='submit'>Add</button>
        </form>
    );
}

export default TodoForm;