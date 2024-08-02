import React, { useState } from "react";
import './index.css';
import TodoList from './Componants/TodoList';

const App = () =>{
  
  const [inpItems, setInpItems] = useState('');
  const [itemList, setItemList] = useState([]);

  const InpEvnt = (event)=>{
    
    setInpItems(event.target.value);
  }

  const ClkEvnt = () =>{
    if(inpItems === ""){
      return alert("Box Should Not be empty")
    }
    setItemList((oldItems)=>{

      return [...oldItems, inpItems];

    });
    setInpItems("");

  };
  const dltItems = (id)=>{
    console.log("clicked delete");
    setItemList((oldItems)=>{
      return oldItems.filter((arrElem, index)=>{
        return index !== id;
      })
    })
}

  return(
    <>
        <div className="main_div">
          <div className="center_div">
          <br />
          <h2>To-Do List</h2>
          <br />
          <input type="text" placeholder="Add Your Work" value={inpItems} onChange={InpEvnt}/>
          <button onClick={ClkEvnt}> + </button>
          <ol>
           
            {
              itemList.map((itemVal, index)=>{
                return <TodoList text={itemVal}
                  key = {index} id = {index}
                  onSelect={dltItems}
                />
              })
            }
          
          </ol>

          </div>
        </div>
    </>
  )
  
 
}

export default App;