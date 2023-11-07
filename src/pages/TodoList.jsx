import React, { useState, useEffect } from 'react'

export default function TodoList() {
  const [inputTask, setInputTask] = useState('');

  //update list with input task
  const [list, setList] = useState([]);

  //function add item to list 
  const handleAddTodo = () => {
    const newTask = {
        id: Math.random(),
        todo: inputTask
      };

  // // keypress to add to list
  //  const handleKeyDown = () => {
  //   if (event.key === 'Enter'){
  //     console.log(handleKeyDown)
  //   }
  //  }

    //create new list without overwritting the original list
    setList([...list, newTask]);
      //reset to empty string
      setInputTask('');
    
  }; 

  //store input task
  const handleInputChange = (event) => {
    setInputTask(event.target.value);
    // console.log(inputTask);
    // console.log(list);
};

// delete button
  const handleDeleteTodo = (id) => {
    const newList =list.filter((todo) =>
      todo.id !== id);
      setList(newList);
  };


    




    
    return (
      <div>
        <div className='flex justify-center p-10 '>
          <input type="text" className="border rounded-md p-2" value={inputTask} onChange={handleInputChange} placeholder="New Task"/>
          <button type="submit" className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full" onClick={handleAddTodo}>Add</button>
        </div>

        <ul className='m-10 text-lg '>
          { list.map((todo) => (
             <li className="list-disc" key={todo.id}>{todo.todo}         
              <button type="submit" className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-1 px-2 rounded-full" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
             </li>
           ))}
        </ul>
      </div>  
  );
};


