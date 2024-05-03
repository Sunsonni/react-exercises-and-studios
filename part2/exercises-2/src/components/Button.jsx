import './styles.css';

function Button() {
   function onLearnMore(){
      alert("Splishie Splashie");
   }

   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;