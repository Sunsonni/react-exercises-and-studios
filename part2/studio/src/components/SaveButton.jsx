import "./styling.css";
import React from 'react';

function SaveButton({onClick}) {

  function handleClick() {
    onClick();
    alert("You are saving this pin!");
  }
  return (
    <button id="saveButton" onClick={handleClick}>
      Save
    </button>
  );
}

export default SaveButton;
