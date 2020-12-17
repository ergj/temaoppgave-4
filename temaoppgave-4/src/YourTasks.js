import React from 'react';
import './YourTasks.css';
import './Screensize.css';

function YourTasks(props){
    const items = props.items;
    const listItems = items.map(item =>
        {
            return( 
                <div className="task-list" key={item.key}>
                    <input 
                        type="checkbox" 
                        className="cb"
                        alt="checkbox"
                    ></input>
                    
                    <input 
                        type="text"
                        className="taskName"
                        id={item.key} 
                        value={item.text}
                        onChange={(e)=>{
                            props.setUpdate(e.target.value, item.key)}}>
                    </input>
                    
                    <button 
                        type="button" 
                        onClick={() => props.deleteItem(item.key)}
                        alt="Trykk her for å slette gjøremål. button.">
                    Slett</button>
                </div>
            )
        })

    return(
    <div>{listItems}</div>
    )
}

export default YourTasks