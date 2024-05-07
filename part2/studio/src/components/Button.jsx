import SaveButton from "./SaveButton";
import ClickedButton from "./ClickedButton";
import { useState } from "react";


function Button() {
  const [myBool, setmyBool] = useState(true);

  function toggleBool() {
    setmyBool(!myBool);
  }

 return (
 <div>
    {myBool ? (
      <SaveButton onClick={toggleBool}/>) : 
      (<ClickedButton onClick={toggleBool}/>)
      }
 </div> 
 )
}
 export default Button; 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 