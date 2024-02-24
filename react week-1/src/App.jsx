import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllButton from "./components/Button";


const user = {
  name:"Rhitik Bhandari",
  imageUrl: "photo",
  imageSize: 90,
};

function MyButton({count, onClick}){


 return(
  <button onClick={onClick}>
  Clicked {count} times
</button>
 )
}


export default function Profile(){

  const [count, setCount] = useState(0);

function handleClick(){
 setCount(count + 1);
}
return(
  <>

  {/* displaying data */}

<h1> {user.name}</h1>
<img 
src={user.imageUrl} 
alt={'photo of ' + user.name} 
style = {{
  height: user.imageSize,
  width: user.imageSize
}}
/>
  

{/* updating the screen */}



<h3>Click the button below</h3>
<AllButton/>

<h3>Below buttons share the data berween components</h3>
<MyButton count={count} onClick={handleClick}/>
<MyButton count={count} onClick={handleClick}/>

  </>
);
}
