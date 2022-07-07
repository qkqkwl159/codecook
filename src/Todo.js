import React from 'react';

function Todo() {
    return (
        <div className='todo'>

            <h1>TO_DO__</h1>
            <div className='todo_items'>

                <p className='items'>items1</p>
                <p className='items'>items1</p>
                <p className='items'>items1</p>
                <p className='items'>items1</p>

            </div>
            <div className='todo_input'>
            <input type="text"></input>
            <button className='todo_button'>+</button>
            </div>
        </div>
    );
}

export default Todo;