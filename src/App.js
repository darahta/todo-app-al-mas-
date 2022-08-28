import React, {useState} from "react";


function App() {

  const [todoText, settodoText]=useState("")

  const handleSubmit =(event)=>{
     event.preventDefault()
     if (todoText === ""){
      alert("Todo text cant be empty");
      return;
     }
     console.log(todoText)
  }


  return (
    <div className="container">
      <h1 className="text-center my-5">Todo App</h1>
      <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
  <input type="text" 
  value={todoText}
  className="form-control" 
  placeholder="Type your todo"
  onChange={(event)=>settodoText(event.target.value)} 
  />
  <button className="btn btn-primary" type="submit">ADD</button>
</div>

      </form>
    </div>
  );
}

export default App;
