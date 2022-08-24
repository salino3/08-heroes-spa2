import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const {login} = useContext(AuthContext)

  const navigate = useNavigate()

  const handleLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';

  login('Carlos Torres')

    navigate(lastPath, 
// para no poder volver atrás con la ruta
    {replace: true})
  }

  return (
    <>
      <div className="container mt-5">
        <h1>Login Page</h1>
        <hr/>

        <button
        onClick={handleLogin}
         className="btn btn-primary">Login</button>
      </div>
    </>
  );
}

