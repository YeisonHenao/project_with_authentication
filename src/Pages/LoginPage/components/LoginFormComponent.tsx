// #region Imports
import { useState } from "react";
import { InputComponent, ButtonGeneric } from '../../../components/StyleComponents/index'
import LoginPageController from "../../../Controller/LoginPageController";
//#endregion

export const LoginFormComponent: React.FC = () => {

  // #region Instances
  const controller = new LoginPageController();

  //Definición de estados del componente
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState("");

  // #endregion

  /**
   * Función para validar los cambios de estado del input de correo para realizar validaciones del campo
   * @param email String -> Correo del usuario ingresado en el input
   */
  const handleEmailChange = (email: string) => {
    setUser(email);
  }

  /**
   * Función que envia al controlador la contraseña para validar la información para decir si el campo es valido o no
   * @param password String -> String ingresado en el input de password para validarse
   */
  const validatePassword = (password: string) => {
    const info: boolean = controller.validatePassword(password);
    if (!info) {
      setPasswordError("La contraseña debe tener al menos 8 caracteres");
    } else {
      setPasswordError("");
    }
  }

  /**
   * Función para escuchar cambios en el input de contraseña para realizar las validaciones del campo
   * @param password String -> Contraseña ingresada por el usuario en el input
   */
  const handlePasswordChange = (password: string) => {
    setPassword(password);
    validatePassword(password);
  }

  /**
   * Función para iniciar sesión en la aplicación
   */
  const handleLogin = () => {
    const info: boolean = controller.loginUser(user,password)
    if(!info){
      alert("No puedes acceder")
    } else {
      alert("Bienvenido")
    }
  }

  return (
    <div>
      <InputComponent
        label="Usuario"
        value={user}
        onChange={handleEmailChange}
      />
      <InputComponent
        label="Contraseña"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        errorMessage={passwordError}
        />
        <ButtonGeneric 
          text="Ingresar"
          OnClick={handleLogin}
        />
    </div>
  );


}