import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
//
import { types } from "../types/types";

// const InitialState = {
//     logged: false,
// }

export const AuthProvider = ({children}) => {

//* función init
const init = () => {

 const user = JSON.parse(localStorage.getItem('user'))

 return {
  logged: !!user,
  user: user
 }
}

  // state, dispatch -> nombres no predefinidos
  // en useReducer debo almacenar que el user está conectado y cual user, y necessito llamar una acción
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  //* funciòn login
const login = (name = '') => {

  const user = {id: 'ABC', name}

  const action = { type: types.login, payload: user}
  // en localStororage solo se guarda 'string'
localStorage.setItem('user', JSON.stringify(user) )

  dispatch(action)
}
//* función logout
const logout = () => {
  localStorage.removeItem('user');
  const action = { type: types.logout };
  dispatch(action)
}


  return (
    <>
      <AuthContext.Provider value={{
        ...authState,
        login: login,
        logout: logout
      }}>
          {children}
      </AuthContext.Provider>
    </>
  );
}

