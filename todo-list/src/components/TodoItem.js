import React from 'react'; 

const TodoItem = (props) => {
    return(
        <div>
            <input type="checkbox" checked={done} onChange = {e => setDone(e.target.checked)}></input>
            <li></li>
        </div>
    )
}

export default TodoItem; 