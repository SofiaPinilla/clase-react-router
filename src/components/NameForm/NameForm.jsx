import { useState } from "react";

const NameForm = () => {
  const [name, setName] = useState("");
  
  const onSubmit =(e)=>{
    e.preventDefault()
    console.log(name)
    setName("")
  }
  return (
    <div>
      NameForm
      <form>
        <input type="text" placeholder="Introduce tu nombre" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={onSubmit}>Enviar</button>
      </form>
    </div>
  );
};

export default NameForm;
