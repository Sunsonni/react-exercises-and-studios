export default function HobbyLinks() {
let linkTitle = "Links to Hobby stores:";
let hobbyLinks = ["https://store.steampowered.com/", "https://pickleballcentral.com/"];
return (
   <div>
    <br />
    <hr3>{linkTitle}</hr3>
    <br />
    <a href = {hobbyLinks[0]}>Steam Store</a>
    <br />
    <a href = {hobbyLinks[1]}>Pickleball Store</a>
    </div>
);
}