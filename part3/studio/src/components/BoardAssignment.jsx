import { useState } from 'react';

export default function BoardAssignment () {
   const [boardName, setboardName] = useState('no boards yet :(');
   const boards = [
      { 
         label: "Cake Ideas",
         value: "Cake Ideas",
       },
       {
         label: 'Wedding Ideas',
         value: "Wedding Ideas",
       }, 
       { 
         label:"Breakfast :)",
         value: "Breakfast :)",
      }];

   const boardObject = boards.map((board,idx)=>{
      return (
         <option key={idx} value={board.value}>{board.label}</option>
      )
   })

   const handleChange = (event) => {
      setboardName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
      {boardObject}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
