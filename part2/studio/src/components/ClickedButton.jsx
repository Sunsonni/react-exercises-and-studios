import React from 'react';

function ClickedButton({onClick}) {
  
    function handleClick() {
      onClick();
      alert("This pin has been removed");
    }
    return (
      <button id="clickedButton" onClick={handleClick}>
        Saved
      </button>
    );
}

export default ClickedButton;

//create alert to inform user that the pin has been saved
//create button 
//import styling and assign correct className clickedButton
