import logo from './logo.svg';
import './App.css';

function App() {
  const addNote=()=>{
    console.log("Hi");   

  }
  return (    
    <div className="container"> 

    
    
    <div>     
        <h1>Your To-do list, </h1>
        <h3>with love by Shiv Sai</h3>
        </div>
      
   <br/>
   <button onClick={()=>addNote()}>Add Note</button>

  
    </div>
    
    
  );
}

export default App;
