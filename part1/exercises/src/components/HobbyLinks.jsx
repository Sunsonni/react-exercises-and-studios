import React from 'react';
import classes from './HobbyLinks.module.css';

export default function HobbyLinks() {
let linkTitle = "Links to Hobby stores:";
let hobbyLinks = ["https://store.steampowered.com/", "https://pickleballcentral.com/"];
return (
   <div>
    <br />
    <hr3 className={classes.hobbyHeading}>{linkTitle}</hr3>
    <br />
        <div className={classes.hobbyText}>
        <a href = {hobbyLinks[0]}>Steam Store</a>
        <br />
        <a href = {hobbyLinks[1]}>Pickleball Store</a>
        </div>
    </div>
);
}