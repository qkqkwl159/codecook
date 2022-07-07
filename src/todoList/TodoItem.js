import React from 'react';

function TodoItem({item, onToggle, onDel}) {
    const {id, text, check} = item


    return (
        <li className={check ?'on' : ""}>
            <span onClick={()=>onToggle(id)} >&#10003;</span>
            <em>{text}</em>
            <button onClick={()=>onDel(id)}>&#10799;</button>
        </li>
    );
}

export default TodoItem;