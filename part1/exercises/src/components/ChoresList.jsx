import React from 'react';
import classes from './ChoresList.module.css';
export default function ChoresList () {
   let pageTitle = "Today's Chores";
   let chores = ["Clean bathroom", "Do Laundry", "Clean out fridge"];
   return (
      <div>
         <h3 className={classes.choresHeading}>{pageTitle}</h3>
         <li className={classes.choresText}>{chores[0]}</li>
         <li className={classes.choresText}>{chores[1]}</li>
         <li className={classes.choresText}>{chores[2]}</li>
      </div>
   );
}