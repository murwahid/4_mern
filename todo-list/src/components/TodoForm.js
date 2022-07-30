/*
PROJECT BREAKDOWN: 
Q: WHAT IS THIS PROJECTLOOKING TO DO? 
- STATE: AN ARRAY OF TO DO ITEMS. 

//FUNC: ADD TO ARRAY

FUNC: MAPPING OVER THE ARRAY AND DISPLAYING THE CHECKLIST ITEMS. 
//CONDITIONAL LOGIC 
IF CHECKED == TRUE THEN STRIKE THROUGH 
    TERNARNY OPERATOR 

    CHECKED ? "STRIKETHROUGH": "LEAVE AS IS"

//FUNC: DELETE 

//HOW DO YOU STRIKE THROUGH <s> </s>

//step: test by just creating a fixed array and looping through that. 
*/

import React, {useState} from 'react'; 
import styles from '../css/MyButtonComponent.module.css'; 

const TodoForm = props => { 
    //HOOKS
    const [newTodo, setTodo] = useState();
    const [todos,setTodos] = useState([]); 
    // const [done, setDone] = useState(false); 
    //SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault(); 
        setTodos([...todos,newTodo]);
        console.log(newTodo);
        console.log(todos);
        todos.push(newTodo);
        // console.log(`Done is ${done}`);
    }
    const handleChange = (i) => {
    // done ? setDone(false): setDone(true)
    //    console.log(`HandleChange is ${done}`);
        console.log(`index is: ${i}`);
        // todos[i].checked = true;
        
        console.log(`isChecked is: ${todos[i].checked}`)
        console.log(todos);
        const copyTodos = [...todos]
        copyTodos[i].checked = copyTodos[i].checked ? false: true; 
        setTodos(copyTodos);
    }

    // const handleDelete = (i) => {
    //     copyTodos.filter(copyTodos.checked)
    // }

    // const todoList = ["item 1", "item2"];
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Item:</label>
                <input className={styles.input} onChange = {(e) => setTodo({content:e.target.value, checked:false})}></input>
                <input type="submit" value="Add On" className={styles.btn}></input>
       {/* styles is an object which you can use dot notation to call the properties */}
            </form>
        <div>
          {/* Map function is going to go her. */}
          <ul>
            {todos.map((item,i) => {
                return (
                    <li key={i}>
                        {
                        item.checked? <s><span>{item.content}</span></s>:<span>{item.content}</span>
                        }
                    <input type="checkbox" onChange = {() => handleChange(i)} ></input>
                    
                </li>
                );
            } 
            )}
          </ul>
            <button className = {styles.btnDelete}> Delete </button>
        </div>
        </div>
    )
}

export default TodoForm;