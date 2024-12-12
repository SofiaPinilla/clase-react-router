import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserForm = () => {
  const initialValue = {
    firstname: "",
    email: "",
  };
  const [data, setData] = useState(initialValue);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const navigate = useNavigate()

  const validateForm = () => {
    if (!data.firstname) {
      setMessage("");
    } else if (data.firstname.length < 3) {
      setMessage("Firstname must be at least 3 characters");
      setBtnDisabled(true);
    } else {
      setMessage("");
      setBtnDisabled(false);
    }
  };

  const handleOnChange = (e) => {
    // console.log("nombre input",e.target.name);
    // console.log("valor del input",e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);//mostramos por consola la información del formulario(data)
    setData(initialValue);//limpiamos el formulario
    navigate("/")// redireccionamos a home
  };

  useEffect(()=>{
    validateForm()
  },[data])
  

  return (
    <div>
      UserForm
      <form>
        <input
          type="text"
          name="firstname"
          value={data.firstname}
          placeholder="Introduce tu nombre"
          onChange={handleOnChange}
        />
        <input
          type="email"
          name="email"
          value={data.email}
          placeholder="Introduce tu correo electronico"
          onChange={handleOnChange}
        />
        <button onClick={handleSubmit} disabled={btnDisabled}>
          Enviar
        </button>
        <br />
        {message}
      </form>
    </div>
  );
};
